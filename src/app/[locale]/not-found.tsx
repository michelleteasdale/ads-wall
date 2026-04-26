import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center pt-24">
      <Container className="text-center">
        <h1 className="text-7xl font-bold mb-4">
          <GradientText>404</GradientText>
        </h1>
        <p className="text-text-secondary text-lg mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <a href="/">
          <Button>Go Home</Button>
        </a>
      </Container>
    </div>
  );
}
