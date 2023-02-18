
export const required = value => {
  if (value) return undefined;
  return "this field is required";
}

export const maxLengthCR = max  => value =>{
    if (max > value.length) return undefined;
    return `from this field max length ${max} symbols`;
}