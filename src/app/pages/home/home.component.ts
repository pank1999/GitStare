import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, toArray, map, BehaviorSubject, combineLatest } from 'rxjs';

interface GitHubEvent {
  id: string;
  type: string;
  actor: {
    login: string;
    avatar_url: string;
  };
  repo: {
    name: string;
    url: string;
  };
  payload: any;
  created_at: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  public eventsSubject = new BehaviorSubject<GitHubEvent[]>([]);
  selectedEventType = new BehaviorSubject<string>('all');

  userEventData$!: Observable<GitHubEvent[]>;
  userData$!: Observable<any>;
  avatar_url!: Observable<any>;
  bgColor!: string;
  isLoading = false;

  eventTypes: string[] = [
    'all',
    'PushEvent',
    'PullRequestEvent',
    'CreateEvent',
    'DeleteEvent',
    'WatchEvent',
    'ForkEvent',
    'PublicEvent',
    'IssuesEvent',
  ];

  ngOnInit(): void {
    // Combine events with filter
    this.userEventData$ = combineLatest([
      this.eventsSubject,
      this.selectedEventType,
    ]).pipe(
      map(([events, filterType]) => {
        if (filterType === 'all') return events;
        return events.filter((event) => event.type === filterType);
      })
    );
  }

  submitForm(data: NgForm) {
    if (!data.value.username) return;

    this.isLoading = true;

    this.http
      .get<GitHubEvent[]>(
        `https://api.github.com/users/${data.value.username}/events`
      )
      .pipe(
        map((events) => events.slice(0, 10)) // Limit to 10 most recent events
      )
      .subscribe({
        next: (events) => {
          this.eventsSubject.next(events);
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
        },
      });

    this.userData$ = this.http
      .get(`https://api.github.com/users/${data.value.username}`)
      .pipe(toArray());
  }

  onFilterChange(eventType: string) {
    this.selectedEventType.next(eventType);
  }
}
