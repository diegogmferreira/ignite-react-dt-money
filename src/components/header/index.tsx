import logoImg from "../../assets/logo.svg";
import { NewTransactionModal } from "../new-transaction-modal";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import * as Dialog from "@radix-ui/react-dialog";

export function Header() {

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>
              Nova transação
            </NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}