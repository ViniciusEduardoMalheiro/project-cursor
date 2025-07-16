import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Transporte
                <span className="text-primary block">Inteligente</span>
                para Você
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Conectamos você aos melhores motoristas da cidade. 
                Viagens seguras, rápidas e confortáveis com apenas um toque.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Baixar Agora
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105">
                Saiba Mais
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Usuários Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Motoristas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">Avaliação</div>
              </div>
            </div>
          </div>

          {/* Map Illustration */}
          <div ref={mapRef} className="relative animate-scale-in">
            <div className="relative bg-card rounded-2xl p-6 shadow-2xl border border-border">
              {/* Map Container */}
              <div className="relative h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl overflow-hidden">
                {/* Map Grid */}
                <div className="absolute inset-0 opacity-20">
                  <div className="h-full w-full" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M0 20L20 0h20v20L20 40H0z'/%3E%3C/g%3E%3C/svg%3E")`,
                  }} />
                </div>

                {/* Roads */}
                <div className="absolute inset-0">
                  {/* Horizontal roads */}
                  <div className="absolute top-1/4 left-0 right-0 h-2 bg-gray-300 rounded-full"></div>
                  <div className="absolute top-3/4 left-0 right-0 h-2 bg-gray-300 rounded-full"></div>
                  
                  {/* Vertical roads */}
                  <div className="absolute left-1/4 top-0 bottom-0 w-2 bg-gray-300 rounded-full"></div>
                  <div className="absolute left-3/4 top-0 bottom-0 w-2 bg-gray-300 rounded-full"></div>
                </div>

                {/* Location Markers */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute top-3/4 left-3/4 w-4 h-4 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

                {/* Car Icons */}
                <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-3 bg-primary rounded-full relative">
                    <div className="absolute -top-1 left-1 w-2 h-1 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="absolute top-2/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-3 bg-primary rounded-full relative">
                    <div className="absolute -top-1 left-1 w-2 h-1 bg-primary rounded-full"></div>
                  </div>
                </div>

                {/* Route Lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <path
                    d="M 25% 25% Q 50% 50% 75% 75%"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                </svg>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-background border border-border rounded-lg p-3 shadow-lg animate-bounce-in">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-foreground">Motorista próximo</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-background border border-border rounded-lg p-3 shadow-lg animate-bounce-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-foreground">Rota otimizada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 