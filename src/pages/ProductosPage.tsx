import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { productCategories } from '../data/products'
import { images } from '../data/assets'
import { productosHero } from '../data/pageHeroes'
import { aboutParagraphs } from '../data/site'
import { navDropdowns } from '../data/navigation'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { PageHero } from '../components/ui/PageHero'
import { BrandIcon } from '../components/ui/BrandIcon'

export function ProductosPage() {
  const items = navDropdowns['/productos']
    .map((item) => productCategories.find((cat) => cat.id === item.href.split('/').pop()))
    .filter(Boolean)

  return (
    <>
      <PageHero image={images.lineaProcesamiento} alt="Productos" content={productosHero} />

      <AnimatedSection className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-colbeef-green text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.25em] uppercase mb-4">
            FLORIDABLANCA / SANTANDER / COLOMBIA
          </p>
          <p className="text-colbeef-gray text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-4">
            {aboutParagraphs[0]}
          </p>
          <BrandIcon variant="badge" className="w-8 h-8 mx-auto" />
        </div>
      </AnimatedSection>

      <AnimatedSection className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {items.map((cat, i) => (
              <motion.div
                key={cat!.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/productos/${cat!.id}`}
                  className="group block relative h-[300px] sm:h-[340px] md:h-[360px] rounded-xl overflow-hidden"
                >
                  <img
                    src={cat!.image}
                    alt={cat!.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 mx-3 mb-3 bg-white rounded-lg p-5 shadow-lg">
                    <h3 className="text-colbeef-green font-bold tracking-wider mb-2">{cat!.title}</h3>
                    <p className="text-colbeef-gray text-xs leading-relaxed line-clamp-3 mb-3 pr-10 sm:pr-12">
                      {cat!.description}
                    </p>
                    <span className="inline-flex items-center gap-2 bg-colbeef-green text-white text-xs font-semibold tracking-widest uppercase px-4 py-2">
                      VER MÁS <ArrowRight className="w-3 h-3" />
                    </span>
                    <img
                      src={cat!.icon}
                      alt=""
                      className="absolute bottom-3 right-3 h-10 w-auto object-contain"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
