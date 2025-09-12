export const TodoGetRequest = (req, res) => {
  res.json({ message: "Server Running successfully" });
};

export const TodoCreateData = (req, res) => {
  console.log(req.body);

  return res.json(req.body);
};
