import { Container, InputInline } from "components";
import { Search as SearchIcon, X } from "react-feather";
import { PropsSearch } from "../../types";
import { SearchContainer, CustomContainer } from "./styles";

const Search = ({ open, onSearch, onClose, search, onOpen }: PropsSearch) => (
  <Container alignItems="center">
    <SearchContainer px={3} onClick={onOpen} {...{ open }}>
      <SearchIcon color="white" height={20} width={20} />
    </SearchContainer>
    <CustomContainer px={3} background="#222222" height={["100px"]} open={open}>
      <Container mr={2}>
        <SearchIcon color="white" height={15} width={15} />
      </Container>
      <InputInline
        placeholder="Search"
        background="transparent"
        value={search}
        onChange={onSearch}
      />
      <Container ml={2} onClick={onClose}>
        <X color="white" height={15} width={15} />
      </Container>
    </CustomContainer>
  </Container>
);

export { Search };
