import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RoseMark } from '../rose-mark/rose-mark';

@Component({
  selector: 'app-logo',
  imports: [RouterLink, RoseMark],
  templateUrl: './logo.html',
  styleUrl: './logo.scss',
})
export class Logo {}
