import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  search = new FormControl('');

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }

  goToSearch(): void {
    if (this.search.value) {
      this.router.navigate([`search/${this.search.value}`])
    }
  }

}
