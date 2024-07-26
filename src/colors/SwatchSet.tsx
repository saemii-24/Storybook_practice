import "./colors.css"; // Import the CSS file

type ColorsItem = {
  color: string;
  className?: string;
  textClassName?: string;
};

type SwatchColors = {
  title: string;
  items: ColorsItem[];
};

type SwatchSetProps = {
  colors: SwatchColors[];
  isSemantic?: boolean;
};

const Swatch = ({ color }: { color: string }) => {
  return (
    <div
      className="swatch" // Custom class for styling
      style={{ backgroundColor: color }}
    ></div>
  );
};

const SemanticSwatch = ({
  color,
  className,
  textClassName,
}: {
  color: string;
  className?: string;
  textClassName?: string;
}) => {
  return (
    <div className={`${className} swatch`}>
      <span className={textClassName}>{color}</span>
    </div>
  );
};

const SwatchSet = ({ colors, isSemantic = false }: SwatchSetProps) => (
  <div className="swatch-set">
    {colors.map(({ title, items }) => (
      <div key={title} className="swatch-category">
        <h2 className="swatch-title">{title}</h2>
        <div className="swatch-items">
          {items.map((c, index) =>
            isSemantic ? (
              <SemanticSwatch
                key={`${c.color}-${index}`}
                className={c.className}
                color={c.color}
                textClassName={c.textClassName}
              />
            ) : (
              <Swatch key={`${c.color}-${index}`} color={c.color} />
            )
          )}
        </div>
      </div>
    ))}
  </div>
);

export default SwatchSet;
