import LoadingTimeout from "@components/Loading/LoadingTimeout";
import SuspenseElem from "@components/Loading/SuspenseElem";

export default function Home() {
  return (
    <>
      {/* <SuspenseElem> */}
      <LoadingTimeout />
      {/* </SuspenseElem> */}
    </>
  );
}
