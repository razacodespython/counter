import { useComponentValue } from "@latticexyz/react";
import { useMUD } from "./MUDContext";
import { singletonEntity } from "@latticexyz/store-sync/recs";

export const App = () => {
  const {
    components: { BalanceTaable, Counter },
    systemCalls: { mint, increment },
  } = useMUD();

  const balances = useComponentValue(BalanceTaable, singletonEntity);
  const counter = useComponentValue(Counter, singletonEntity);
  console.log("balances" + balances);
  return (
    <>
      <button onClick={mint}>Mint</button>
      {balances && (
        <div>
          <>
            {/* {balances?.map((balance) => (
            <p key={balance.key.owner}>
              {balance.key.owner} has {balance.value.value} {balance.key.item}
            </p>
          ))} */}
            balance: {balances?.value}
          </>
        </div>
      )}
      <div>
        Counter: <span>{counter?.value ?? "??"}</span>
      </div>
      <button
        type="button"
        onClick={async (event) => {
          event.preventDefault();
          console.log("new counter value:", await increment());
        }}
      >
        Increment
      </button>
    </>
  );
};
