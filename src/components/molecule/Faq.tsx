import { useState } from "react";
import QandA from "./QandA";
import FaqDataSet from "./FaqDataSet";

const Faq = () => {
  const [expand, setExpand] = useState("");

  const triggerToggle = (event: React.SyntheticEvent) => {
    const { id } = event.target as HTMLInputElement;
    id === expand ? setExpand("") : setExpand(id);
  };

  return (
    <div id="b" onClick={triggerToggle}>
      {FaqDataSet.map((value) => {
        return <QandA key={value.id} valueData={value} selected={expand} />;
      })}
    </div>
  );
};

export default Faq;
