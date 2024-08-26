export type TFormSelectProps = {
    label?: string;
    name: string;
    //options will be an array of object
    options: { value: string; label: string }[] | undefined;
    defaultValue?: string;
    disabled?: boolean;
  };
  