import EnerB from "@components/EnerB";
import SuspenseElem from "@components/Loading/SuspenseElem";

export default function Home() {
  return (
    <>
      <SuspenseElem>
        <EnerB />
      </SuspenseElem>
    </>
  );
}
