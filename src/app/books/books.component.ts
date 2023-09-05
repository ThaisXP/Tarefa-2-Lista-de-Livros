import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books : Book[] = [];

  constructor(private bookService: BookService){}

  ngOnInit(): void {
      this.bookService.getBooks().subscribe(
        {
           next: books => this.books = books
        }
      )
  }

}






