import connection from './connection.ts'
import { BookWithCustomerName } from '../../models/book.ts'

export async function getAllBooks(): Promise<BookWithCustomerName[]> {
  return connection('books')
    .join('customers', 'customers.id', 'books.customer_id')
    .select(
      'books.id as id',
      'customer_id as customerId',
      'title',
      'author',
      'is_available as isAvailable',
      'customers.name as customerName',
    )
}

export async function checkOutBook(
  bookId: number,
  customerId: number,
): Promise<void> {
  return connection('books')
    .where('id', bookId)
    .update({ is_available: false, customer_id: customerId })
}
