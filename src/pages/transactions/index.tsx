import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { TransactionsContext } from "../../contexts/transactions-context";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { SearchForm } from "./components/search-form";
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles";

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td width={"50%"}>{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionTable>
      </TransactionContainer >
    </>
  )
}