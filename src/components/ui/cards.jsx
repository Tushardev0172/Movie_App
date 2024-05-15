import { util } from "../../utils/util";
import { Link } from "react-router-dom";

export const Cards = ({ items, className }) => {

  return (
    <div
      className={util(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item) => (
        <Link
          to={`/products/${item.show.id}`}
          className="relative group block p-2 h-full w-full text-center "
        >
          <Card>
            <CardTitle>{item.show.name}</CardTitle>
            <CardDescription>
              <div className="flex flex-col">
                <span>Language : {item.show.language}</span>
                <span>Type : {item.show.type}</span>
                <span>Rating : {item.show.rating.average}</span>
              </div>
            </CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={util(
        "rounded-xl h-full w-full p-4 overflow-hidden bg-gray-900 hover:border-red-500 border-2 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={util("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={util(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};


