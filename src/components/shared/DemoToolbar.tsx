import { ArrowLeft, ArrowRight, Grid2x2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getConceptNeighbors } from '../../content/integritsContent';
import type { ConceptSlug } from '../../content/contentTypes';

interface DemoToolbarProps {
  slug: ConceptSlug;
  number: string;
}

export function DemoToolbar({ slug, number }: DemoToolbarProps) {
  const { previous, next } = getConceptNeighbors(slug);

  return (
    <div className="concept-toolbar" aria-label="Concept showcase toolbar">
      <Link className="concept-toolbar__action" to="/">
        <Grid2x2 size={16} />
        <span>Back to Showcase</span>
      </Link>
      <span className="concept-toolbar__current">Concept {number}</span>
      <div className="concept-toolbar__pager">
        {previous ? (
          <Link className="concept-toolbar__action" to={previous.path}>
            <ArrowLeft size={16} />
            <span>{previous.title}</span>
          </Link>
        ) : (
          <span className="concept-toolbar__placeholder">Start of showcase</span>
        )}
        {next ? (
          <Link className="concept-toolbar__action" to={next.path}>
            <span>{next.title}</span>
            <ArrowRight size={16} />
          </Link>
        ) : (
          <span className="concept-toolbar__placeholder">End of showcase</span>
        )}
      </div>
    </div>
  );
}
