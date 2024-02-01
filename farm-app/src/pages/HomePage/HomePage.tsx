import { useFarms } from "../../components/hooks/useFarms";
import { Container } from "./HomePage.style";

const HomePage = () => {
  const { farms, fields } = useHomePageData();

  return (
    <Container>
        <title>Hello in Farms overview</title>
      <p>{fields.map(field => <Field key={field.id}/>)}</p>
      <FieldListSection />
      <MachineListSection />
    </Container>
  );
};
