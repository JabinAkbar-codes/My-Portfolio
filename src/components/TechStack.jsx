import { memo, useMemo } from "react";
import { Layout, Server, Settings, Database, Cpu } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
const TechStack = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
    const { t } = useLanguage();
    // useMemo to stabilize the skills data and avoid recreating JSX elements
    const skillsData = useMemo(() => [
        {
            iconComp: <Layout className="h-5 w-5 sm:h-6 sm:w-6 text-primary"/>,
            skills: [
                 {
                    name: "HTML5",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
                }, 
                 {
                    name: "CSS3",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
                 },
                {
                    name: "Bootstrap 5",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
                 },
                 {
                    name: "JavaScript",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                 }, 
                 {
                    name: "React.js",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                 },
                 {
                    name: "React Native",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                },
                {
                    name: "Tailwind CSS",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
                },
                {
                    name: "Framer Motion",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
                    invertInDarkMode: true,
                },
                {
                    name: "Vue.js",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
                },
                {
                    name: "Three.js",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg",
                    invertInDarkMode: true,
                },
                
            ],
        },
        {
            iconComp: <Server className="h-5 w-5 sm:h-6 sm:w-6 text-primary"/>,
            skills: [
                 {
                    name: "Python",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
                }, 
                {
                    name: "Django",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
                },
                {
                    name: "JavaScript",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                }, 
                {
                    name: "PHP",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
                },
                {
                    name: "FastAPI",
                    icon: "https://cdn.jsdelivr.net/gh/callback-io/allogo@main/public/logos/fastapi/icon.svg",
                },
                {
                    name: "OpenAPI",
                    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openapiinitiative.svg",
                    invertInDarkMode: true,
                },
                {
                    name: "Socket.IO",
                    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/socketdotio.svg",
                    invertInDarkMode: true,
                },
                {
                    name: "JWT",
                    icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/jwt/default.svg",
                },
                
            ],
        },
        {
            iconComp: <Database className="h-5 w-5 sm:h-6 sm:w-6 text-primary"/>,
            skills: [
                {
                    name: "MySQL",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
                },
                {
                    name: "SQLite",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
                },
                {
                    name: "PostgreSQL",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
                },
                {
                    name: "Firebase",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
                },
                {
                    name: "MangoDB",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
                },
                {
                    name: "Oracle",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",
                },
            ],
        },
        {
            iconComp: <Settings className="h-5 w-5 sm:h-6 sm:w-6 text-primary"/>,
            skills: [
                {
                    name: "Git",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
                },
                {
                    name: "Github",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
                    invertInDarkMode: true,
                },
                
                {
                    name: "VS Code",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
                },
                {
                    name: "Postman",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
                },
                {
                    name: "Vite",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
                },
                {
                    name: "npm",
                    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/npm.svg",
                    invertInDarkMode: true,
                },
                
                {
                    name: "Netlify",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg",
                    
                },
                {
                    name: "Vercel",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
                    invertInDarkMode: true,
                },
                {
                    name: "Render",
                    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/render.svg",
                    invertInDarkMode: true,
                },
                {
                    name: "Kali Linux",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kalilinux/kalilinux-original.svg",
                },
            ],
        },
    ], []);
    return (<section id="stack" className="relative py-16 md:py-28 bg-transparent overflow-hidden px-4 sm:px-6">
      <div ref={ref} className={`container relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="flex flex-row items-center gap-3 sm:gap-4 mb-8 md:mb-12 ml-1">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shadow-[0_0_10px_rgba(168,85,247,0.15)]">
            <Cpu className="h-5 w-5 sm:h-6 sm:w-6 text-primary"/>
          </div>

          <div>
            <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-primary font-semibold block mb-1">
              {t.tech.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-foreground">
              {t.tech.title}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skillsData.map((category, categoryIndex) => (<div key={categoryIndex} className={`group p-4 md:p-6 rounded-xl sm:rounded-2xl border border-[#E9E2F8] dark:border-white/5 bg-white/85 dark:bg-[#08070b]/90 backdrop-blur-md hover:border-primary/30 dark:hover:bg-[#0d0c12] transition-all duration-700 ease-out shadow-[0_12px_32px_rgba(88,28,135,0.06)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.22)] hover:shadow-[0_24px_60px_rgba(168,85,247,0.14)] ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${categoryIndex * 50}ms` }}>
              <div className="flex items-center gap-3 sm:gap-4 mb-4 md:mb-6">
                <div className="p-2 sm:p-3 rounded-lg bg-primary/10 border border-primary/20 shadow-[0_0_10px_rgba(168,85,247,0.1)] group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 shrink-0">
                  {category.iconComp}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-foreground group-hover:text-primary transition-colors leading-tight">
                  {t.tech.categories[categoryIndex]}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {category.skills.map((skill, skillIndex) => (<div key={skill.name} className={`group/skill flex items-center gap-1.5 md:gap-2 rounded-full border border-[#ECE4FB] dark:border-white/10 bg-[#FCFAFF] dark:bg-[#110f1a]/60 px-2.5 py-1.5 md:px-3 md:py-2 transition-all duration-300 hover:border-primary/30 hover:bg-[#F7F1FF] dark:hover:bg-primary/[0.1] hover:shadow-[0_4px_16px_rgba(168,85,247,0.15)] active:scale-95 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{
                    transitionDelay: `${categoryIndex * 50 + skillIndex * 20}ms`,
                }}>
                    <img src={skill.icon} alt={`${skill.name} icon`} className={`h-4 w-4 object-contain flex-shrink-0 ${skill.invertInDarkMode
                    ? "dark:invert dark:opacity-90"
                    : ""}`} loading="lazy" decoding="async"/>
                    <p className="text-xs font-semibold text-slate-900 dark:text-white/80 group-hover/skill:text-primary transition-colors duration-300 whitespace-nowrap">
                      {skill.name}
                    </p>
                  </div>))}
              </div>
            </div>))}
        </div>
      </div>
    </section>);
};
export default memo(TechStack);
