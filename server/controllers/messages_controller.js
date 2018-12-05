let messages = [];
let id = 0;

const create = (req, res, next) => {
  const { text, time } = req.body;
  messages.push({ id, text, time });
  id++;
  res.send(messages);
};

const read = (req, res, next) => {
  res.status(200).send(messages);
};

const update = (req, res, next) => {
  const { text } = req.body;
  const id = req.params.id;
  const index = messages.findIndex(message => +message.id === +id);
  let message = messages[index];

  messages[index] = {
    id: message.id,
    text: text || message.text,
    time: message.time
  };
  res.send(messages);
};

const deleted = (req, res, next) => {
  const id = req.params.id;
  const index = messages.findIndex(message => message.id === id);

  messages.splice(index, 1);

  res.send(messages);
};

module.exports = {
  create,
  read,
  update,
  deleted
};
