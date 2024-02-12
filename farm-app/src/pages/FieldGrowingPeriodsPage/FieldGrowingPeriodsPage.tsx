import { useParams } from "react-router";
import {
  AssociatedStuff,
  SmallGrowingPeriodCardContainer,
} from "../FieldDetailsPage/FieldDetailsPage.style";
import GrowingPeriodCard from "../GrowingPeriodCard/GrowingPeriodCard";
import { useFieldGrowingPeriodPageLogic } from "./FieldGrowingPeriods.logic";
import { HeaderContainer } from "./FieldGrowingPeriods.style";

function FieldGrowingPeriodsPage() {
  const { associatedGrowingPeriods } = useFieldGrowingPeriodPageLogic();
  const { id } = useParams();

  const hasGrowingPeriods =
    associatedGrowingPeriods && associatedGrowingPeriods.length > 0;
  const sortedGrowingPeriods = hasGrowingPeriods
    ? associatedGrowingPeriods.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
    : [];

  return (
    <div>
      {hasGrowingPeriods ? (
        <>
          <HeaderContainer>
            <h2>Growing Periods</h2>
          </HeaderContainer>
          <div>
            <AssociatedStuff>
              {sortedGrowingPeriods.map((growingPeriod) => (
                <SmallGrowingPeriodCardContainer key={growingPeriod.id}>
                  <GrowingPeriodCard
                    key={growingPeriod.id}
                    growingPeriod={{
                      ...growingPeriod,
                      createdAt: new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "2-digit",
                      }).format(new Date(growingPeriod.createdAt)),
                    }}
                  />
                </SmallGrowingPeriodCardContainer>
              ))}
            </AssociatedStuff>
          </div>
        </>
      ) : (
        <p>No associated growing periods.</p>
      )}
    </div>
  );
}

export default FieldGrowingPeriodsPage;
