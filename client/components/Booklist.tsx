import { useQuery } from "@tanstack/react-query"
import { useGetListOfBooks } from '../apis/books'

export default function BookList() {
  const {data: books, error, isPending } = useQuery({queryKey: ['books'], queryFn: useGetListOfBooks})

  if (isPending) {
    return <p>Is loading...</p>
  }

  if (error) {
    return <p>Error.. {error.message}</p>
  }

  return (
    <div>
    <h1>Books currently in stock</h1>
    <table className="bookList">
      <tr>
        <th>Title</th>
        <th>Book ID</th>
        <th>Available</th>
        <th>Customer</th>
      </tr>
    {books.map((book) => (
      <tr key={book.id}>
        <td>{book.title}</td>
        <td>{book.id}</td>
        <td>{book.isAvailable ? "Available" : "Not Available"}</td>
        <td>{book.customerName == undefined ? "No Customer" : book.customerName}</td>
      </tr>
    ))}
    </table>
    </div>
  )
}