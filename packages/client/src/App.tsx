import { useComponentValue, useEntityQuery } from "@latticexyz/react";
import { useMUD } from "./MUDContext";
import { singletonEntity } from "@latticexyz/store-sync/recs";
import { Has, HasValue, getComponentValueStrict } from "@latticexyz/recs";

export const App = () => {
  const {
    components: { BalanceTaable, Counter },
    systemCalls: { mint, increment },
    network: { world }
  } = useMUD();
 
  const balanceId = useEntityQuery([Has(BalanceTaable)])
  const entity = world.registerEntity({ id: balanceId })
  const value = useComponentValue(BalanceTaable, entity)
  const counter = useComponentValue(Counter, singletonEntity);
  console.log({ 
    entity,
    value
  })
  return (
    <>
      <button onClick={mint}>Mint</button>
      {value && (
        <div>
          <>
            {/* {balances?.map((balance, i) => {
              console.log({ balance })
              return(
                <p key={i}>{getComponentValueStrict(BalanceTaable, balance)}</p>
              )
            })} */}
            balance: {value.value}
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
