import { Search as SearchIcon } from "react-feather";
import { Container, InputInline } from "components";
import { PropsSearch } from "../types";
import { SearchContainer } from "../styles";

const Search = ({ search, onChange }: PropsSearch) => (
  <SearchContainer
    display="flex"
    justifyContent="center"
    width="95%"
    mx={2}
    py={3}
  >
    <Container width="85%">
      <InputInline
        placeholder="Search channel..."
        background="#222222"
        value={search}
        {...{ onChange }}
      />
    </Container>
    <Container ml={2}>
      <SearchIcon color="white" height={18} width={18} />
    </Container>
  </SearchContainer>
);

export { Search };
