const adventurers = [
    "Roald Amundsen",
    "Fridtjof Nansen",
    "Sverre Hassel",
    "Olav Bjaaland",
]

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
 exports.randomAdventurer = (req, res) => {
    res.status(200).send(adventurers[Math.floor(Math.random() * adventurers.length)]);
};
