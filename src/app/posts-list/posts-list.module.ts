import { NgModule } from '@angular/core';
import { PostsListComponent } from './posts-list.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatInputModule} from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [PostsListComponent],
  exports: [PostsListComponent]
})
export class PostsListModule { }
