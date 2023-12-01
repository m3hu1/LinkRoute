import ReactMarkdown from "react-markdown";

interface CardProps {
  title: string;
  description: string;
  link?: string;
  large?: boolean;
}

export default function Card({ title, description, link, large }: CardProps) {
  return (
    <div
      className={`relative col-span-1 h-60 overflow-hidden rounded-xl bg-#0e1117 ${
        large ? "md:col-span-2" : ""
      } ml-20 py-20 flex flex-col`}
    >
      <div className="flex h-60 items-center justify-center"></div>
      <div className="mx-auto max-w-md text-center">
        <h2 className="text-gradient_purple-blue bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold  [text-wrap:balance] md:text-3xl md:font-normal">
          {title}
        </h2>
        <div className="prose-sm leading-normal text-white-500 [text-wrap:balance] md:prose">
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                  className="font-medium text-white-800 underline transition-colors"
                />
              ),
              code: ({ node, ...props }) => (
                <code
                  {...props}
                  className="rounded-sm bg-gray-100 px-1 py-0.5 font-mono font-medium text-white-800"
                />
              ),
            }}
          >
            {description}
          </ReactMarkdown>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-effect-animate underline"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
