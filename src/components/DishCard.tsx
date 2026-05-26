interface DishCardProps {
  image: string;
  name: string;
  description: string;
}

export function DishCard({ image, name, description }: DishCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          width={1024}
          height={1024}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-2xl text-foreground leading-tight">{name}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </article>
  );
}
