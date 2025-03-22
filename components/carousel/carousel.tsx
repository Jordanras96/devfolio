import React from "react";
import {
  DotButton,
  useDotButton,
} from "@/components/carousel/EmblaCarouselDotButtons";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { ExternalLink, Lock } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

interface CarouselItem {
  title: string;
  image: string;
  tag: string;
  description: string;
  frontend: string;
  backend: string;
  server: string;
  database: string;
  confidential: boolean;
}

type PropType = {
  slides: CarouselItem[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  // Optimiser les options du carrousel pour mobile
  const OPTIONS: EmblaOptionsType = {
    loop: true,
    skipSnaps: false,
    dragFree: false,
    containScroll: "trimSnaps",
  };

  // Utiliser les options passées en props ou les options par défaut
  const options = props.options || OPTIONS;

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 7000, stopOnInteraction: false }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport-container">
        <div
          className="embla__viewport"
          ref={emblaRef}
          aria-label="Galerie de projets"
          role="region"
        >
          <div className="embla__container">
            {props.slides.map((items, index) => (
              <div className="embla__slide" key={index}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{items.title}</CardTitle>
                    <CardDescription>{items.tag}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                      <Image
                        src={items.image}
                        alt={items.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-muted-foreground line-clamp-3">
                      {items.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    {!items.confidential ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="flex items-center gap-2"
                          >
                            Détails <ExternalLink className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{items.title}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <p>{items.description}</p>
                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                              <div>
                                <h4 className="font-semibold">Frontend</h4>
                                <p className="text-sm text-muted-foreground">
                                  {items.frontend}
                                </p>
                              </div>
                              <div>
                                <h4 className="font-semibold">Backend</h4>
                                <p className="text-sm text-muted-foreground">
                                  {items.backend}
                                </p>
                              </div>
                              <div>
                                <h4 className="font-semibold">Server</h4>
                                <p className="text-sm text-muted-foreground">
                                  {items.server}
                                </p>
                              </div>
                              <div>
                                <h4 className="font-semibold">Database</h4>
                                <p className="text-sm text-muted-foreground">
                                  {items.database}
                                </p>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    ) : (
                      <Button
                        disabled
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        Confidentiel <Lock className="w-4 h-4" />
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots border border-accent rounded-full">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={index === selectedIndex ? "embla__dot--selected" : ""}
              aria-label={`Aller au projet ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
