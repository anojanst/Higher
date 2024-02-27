type CheckBoxProps = {
  label: string;
};

const CheckBox = ({ label }: CheckBoxProps) => {
  return (
    <div className="flex gap-4">
      <input type="checkbox" name="" id="" />
      <label>{label}</label>
    </div>
  );
};

export default CheckBox;
