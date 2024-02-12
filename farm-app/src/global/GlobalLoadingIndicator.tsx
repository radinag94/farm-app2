import { useIsFetching } from "react-query";

function GlobalLoadingIndicator() {
  const isFetching = useIsFetching();
  return isFetching ? (
    <div style={{ position: "fixed", top: 0, right: 0 }}>Loading...</div>
  ) : null;
}

export default GlobalLoadingIndicator;
