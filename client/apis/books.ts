import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
import { BookWithCustomerName } from '../../models/book'

export default function useEventCheckoutBook() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      bookId,
      customerId,
    }: {
      bookId: string | number
      customerId: string
    }) => {
      const result = await request
        .patch(`/api/v1/books/${bookId}`)
        .send({ customerId })
      return result.body
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['bookList'] })
    },
  })
}

export async function useGetListOfBooks(): Promise<BookWithCustomerName[]> {
  const result = await request.get('/api/v1/books')
  return result.body
}
