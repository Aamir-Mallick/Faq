import { FaChevronDown, FaChevronUp } from "react-icons/fa";
type QandAType = {
  selected: string;
  valueData: {
    id: String;
    title: string;
    answer: string;
  };
};

const divStyle = {
  container: {
    padding: "1px",
    marginTop: "5px",
    width: "80%",
    boxShadow: "0px 0px 3px gray",
    marginBottom: "15px",
    cursor: "pointer",
  },
  contentContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingRight: "15px",
    paddingLeft: "10px",
    gap: "5px",
  },
};
const QandA = (props: QandAType) => {
  const { selected } = props;
  const { id, title, answer } = props.valueData;
  return (
    <div id={id as string} style={divStyle.container}>
      <div id={id as string} style={divStyle.contentContainer}>
        <h4 id={id as string}>{title}</h4>
        {selected === id ? <FaChevronDown /> : <FaChevronUp />}
      </div>

      {selected === id && <p>{answer}</p>}
    </div>
  );
};

export default QandA;
