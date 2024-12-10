import CheckoutForm from './CheckoutForm'
import useEventCheckoutBook from '../apis/books'
import Footer from './Footer'
import Header from './Header'
import BookList from './Booklist'

export default function App() {
  const eventCheckoutBook = useEventCheckoutBook()

  const handleSubmit = (formData: {
    bookId: number | string
    customerId: string
  }) => {
    eventCheckoutBook.mutateAsync(formData)
  }

  return (
    <>
      <Header />
      <h1 className="checkout">Library Checkout</h1>
      <CheckoutForm
        customerId=""
        bookId=""
        submitLabel="Checkout Book"
        onSubmit={handleSubmit}
      />
      <BookList />
      <Footer />
    </>
  )
}
