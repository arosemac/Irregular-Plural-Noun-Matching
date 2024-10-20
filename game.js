const irregularNouns = [
  { singular: 'child', plural: 'children' },
  { singular: 'foot', plural: 'feet' },
  { singular: 'tooth', plural: 'teeth' },
  { singular: 'goose', plural: 'geese' },
  { singular: 'man', plural: 'men' },
  { singular: 'woman', plural: 'women' },
  { singular: 'mouse', plural: 'mice' },
  { singular: 'person', plural: 'people' },
  { singular: 'cactus', plural: 'cacti' },
  { singular: 'criterion', plural: 'criteria' },
];

const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const IrregularPluralGame = () => {
  const [singulars, setSingulars] = useState([]);
  const [plurals, setPlurals] = useState([]);
  const [selected, setSelected] = useState(null);
  const [matches, setMatches] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    setSingulars(shuffleArray(irregularNouns.map(noun => noun.singular)));
    setPlurals(shuffleArray(irregularNouns.map(noun => noun.plural)));
    setSelected(null);
    setMatches([]);
    setGameOver(false);
  };

  const handleClick = (word, isSingular) => {
    if (selected) {
      if (
        (isSingular && irregularNouns.find(noun => noun.singular === selected && noun.plural === word)) ||
        (!isSingular && irregularNouns.find(noun => noun.plural === selected && noun.singular === word))
      ) {
        setMatches([...matches, selected, word]);
        setSelected(null);
        if (matches.length === irregularNouns.length * 2 - 2) {
          setGameOver(true);
        }
      } else {
        setSelected(null);
      }
    } else {
      setSelected(word);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Irregular Plural Nouns Matching Game</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Singular</h3>
          {singulars.map((word) => (
            <Card
              key={word}
              className={`mb-2 cursor-pointer ${matches.includes(word) ? 'bg-green-200' : selected === word ? 'bg-blue-200' : ''}`}
              onClick={() => !matches.includes(word) && handleClick(word, true)}
            >
              <CardContent className="p-2">{word}</CardContent>
            </Card>
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Plural</h3>
          {plurals.map((word) => (
           const Card = ({ children, className, onClick }) => (
  <div onClick={onClick} className={`border rounded p-2 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children }) => <div>{children}</div>;
          ))}
        </div>
      </div>
     const Button = ({ children, onClick, className }) => (
  <button onClick={onClick} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}>
    {children}
  </button>
);
      </Button>
      {gameOver && <p className="mt-4 text-xl font-bold text-green-600">Congratulations! You've matched all the pairs!</p>}
    </div>
  );
};
ReactDOM.render(<IrregularPluralGame />, document.getElementById('root'));
