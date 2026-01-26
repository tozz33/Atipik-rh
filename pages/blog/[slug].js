import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';

export default function BlogArticle() {
  const router = useRouter();
  const { slug } = router.query;

  // Articles data avec slugs SEO-optimisés
  const articles = [
    {
      id: 17,
      slug: "devenir-formateur-adultes-sans-etudes-longues-reconversion",
      title: "Devenir formateur pour adultes sans reprendre des études longues : est-ce vraiment possible ?",
      excerpt: "Changer de métier sans repartir sur les bancs de l'université est aujourd'hui une aspiration forte. Parmi les reconversions qui attirent de plus en plus de professionnels expérimentés, le métier de formateur pour adultes occupe une place à part.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop&q=80",
      date: "20 janvier 2026",
      readTime: "15 min",
      author: "Vanessa NOAH EWODO",
      category: "Formations",
      keywords: "formateur adultes, formation FPA, reconversion formateur, devenir formateur sans diplôme, formation courte formateur, pédagogie adultes, formateur professionnel adultes, reconversion professionnelle formateur",
      content: `
        <p>Changer de métier sans repartir sur les bancs de l'université est aujourd'hui une aspiration forte. Parmi les reconversions qui attirent de plus en plus de professionnels expérimentés, le métier de <strong>formateur pour adultes</strong> occupe une place à part. Transmission, sens, autonomie… mais aussi beaucoup de questions.</p>

        <p>Faut-il un diplôme ? Une formation longue ? Un parcours académique irréprochable ?</p>

        <p><strong>Bonne nouvelle : devenir formateur pour adultes sans études longues est possible, à condition de structurer son projet intelligemment.</strong></p>

        <h2>Pourquoi le métier de formateur pour adultes séduit autant en reconversion</h2>

        <p>Après plusieurs années de carrière, nombreux sont ceux qui ressentent l'envie de transmettre leur expérience plutôt que de continuer à l'appliquer uniquement sur le terrain.</p>

        <p>Le métier de formateur répond à plusieurs aspirations fortes :</p>

        <ul>
          <li><strong>Donner du sens à son parcours professionnel</strong></li>
          <li><strong>Valoriser une expertise acquise au fil des années</strong></li>
          <li><strong>Conserver une certaine liberté</strong> (statut, organisation, missions)</li>
          <li><strong>Travailler avec des publics variés et engagés</strong></li>
        </ul>

        <p>Dans de nombreux secteurs – management, ressources humaines, sécurité, numérique, relation client – la demande de formateurs qualifiés dépasse l'offre. L'expérience terrain y est souvent plus recherchée qu'un diplôme académique.</p>

        <h2>Faut-il un diplôme pour devenir formateur pour adultes ?</h2>

        <p>C'est l'une des idées reçues les plus fréquentes.</p>

        <h3>Ce que dit la réalité</h3>

        <p>Il n'existe pas de diplôme obligatoire unique pour exercer comme formateur pour adultes. Ce qui compte avant tout, c'est :</p>

        <ul>
          <li>votre expertise métier</li>
          <li>votre capacité à la transmettre</li>
          <li>votre posture professionnelle face à un public adulte</li>
        </ul>

        <p>Former des adultes ne consiste pas à "réciter un savoir". Il s'agit d'accompagner, de faire réfléchir, de favoriser l'autonomie et l'apprentissage par l'expérience.</p>

        <h3>Ce que regardent les recruteurs et organismes de formation</h3>

        <p>Dans les faits, les recruteurs et organismes s'intéressent surtout à :</p>

        <ul>
          <li>votre crédibilité professionnelle</li>
          <li>votre capacité à structurer un contenu</li>
          <li>votre aisance relationnelle</li>
          <li>votre adaptabilité aux différents publics</li>
        </ul>

        <p>Une formation pédagogique est donc un atout fort, mais elle n'a pas besoin d'être longue ou universitaire.</p>

        <h2>Formation de formateur pour adultes : quelles options sans études longues ?</h2>

        <p>Il existe aujourd'hui des parcours adaptés aux adultes en reconversion.</p>

        <h3>Des formations courtes et ciblées</h3>

        <p>De nombreuses formations permettent d'acquérir rapidement :</p>

        <ul>
          <li>les bases de la pédagogie pour adultes</li>
          <li>la posture de formateur</li>
          <li>les méthodes d'animation</li>
          <li>l'évaluation des acquis</li>
        </ul>

        <p>Certaines formations certifiantes, comme celles orientées "formateur professionnel d'adultes", peuvent être suivies sans reprendre des études longues, souvent sur quelques mois, parfois en parallèle d'une activité.</p>

        <h3>Présentiel, distanciel ou hybride</h3>

        <p>Le format dépend de votre situation :</p>

        <ul>
          <li>le présentiel favorise la mise en pratique</li>
          <li>le distanciel offre plus de flexibilité</li>
          <li>l'hybride combine les deux</li>
        </ul>

        <p>L'essentiel n'est pas le format, mais l'adéquation avec votre projet réel.</p>

        <h2>Avant la formation : pourquoi le bilan de compétences est une étape clé</h2>

        <p>C'est ici que de nombreux projets échouent… par précipitation.</p>

        <p>Se former sans avoir clarifié son projet expose à :</p>

        <ul>
          <li>un mauvais choix de formation</li>
          <li>une perte de temps et d'argent</li>
          <li>une reconversion peu alignée avec ses aspirations</li>
        </ul>

        <p>Un <a href="/bilan-de-competences">bilan de compétences</a> permet de :</p>

        <ul>
          <li>identifier vos compétences transférables</li>
          <li>vérifier la cohérence de votre projet de formateur</li>
          <li>définir votre positionnement (salarié, indépendant, vacataire)</li>
          <li>sécuriser votre trajectoire professionnelle</li>
        </ul>

        <p>Chez Atipik RH, le bilan de compétences n'est pas une formalité. C'est un véritable outil de décision, pensé pour les parcours atypiques et les reconversions durables.</p>

        <div style="margin: 3rem 0; text-align: center;">
          <a href="/s-inscrire" style="display: inline-block; cursor: pointer; transition: transform 0.3s ease;">
            <img src="/images/blog/formateur-fpa-cta.jpg" alt="Prêt à vous lancer dans cette aventure professionnelle ? M'inscrire à la formation Formateur Professionnel d'Adultes (FPA)" style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(1, 63, 99, 0.3); border: 2px solid #013F63; transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 6px 16px rgba(1, 63, 99, 0.4)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 12px rgba(1, 63, 99, 0.3)';" />
          </a>
        </div>

        <h2>Comment financer une formation de formateur pour adultes ?</h2>

        <p>Bonne nouvelle : plusieurs solutions existent.</p>

        <p>Selon votre situation, vous pouvez mobiliser :</p>

        <ul>
          <li>le CPF</li>
          <li>des aides via France Travail</li>
          <li>un financement employeur</li>
          <li>un autofinancement réfléchi et stratégique</li>
        </ul>

        <p>Dans de nombreux cas, le bilan de compétences est lui-même finançable, ce qui permet de poser des bases solides avant d'investir dans une formation.</p>

        <h2>Les erreurs fréquentes à éviter quand on veut devenir formateur</h2>

        <p>Certaines erreurs reviennent souvent :</p>

        <ul>
          <li>penser que l'expertise suffit à former</li>
          <li>choisir une formation sans projet clair</li>
          <li>négliger la posture pédagogique</li>
          <li>sous-estimer le temps nécessaire pour s'installer</li>
        </ul>

        <p>Devenir formateur est un véritable métier, qui s'apprend et se construit dans la durée.</p>

        <h2>Devenir formateur : salarié, indépendant ou les deux ?</h2>

        <p>Il existe plusieurs voies :</p>

        <ul>
          <li>formateur salarié (interne ou organisme)</li>
          <li>formateur vacataire</li>
          <li>formateur indépendant</li>
          <li>combinaison de plusieurs statuts</li>
        </ul>

        <p>Chaque option a ses avantages et ses contraintes. Le bon choix dépend de votre personnalité, de vos objectifs et de votre équilibre de vie souhaité.</p>

        <h2>Êtes-vous fait pour devenir formateur pour adultes ?</h2>

        <p>Posez-vous ces questions :</p>

        <ul>
          <li>Aimez-vous transmettre et expliquer ?</li>
          <li>Êtes-vous à l'aise à l'oral ?</li>
          <li>Savez-vous vous adapter à des publics variés ?</li>
          <li>Êtes-vous prêt à apprendre en continu ?</li>
          <li>Acceptez-vous de remettre vos pratiques en question ?</li>
        </ul>

        <p>Si vous vous reconnaissez dans ces points, le métier de formateur peut devenir une évolution naturelle de votre parcours.</p>

        <h2>Et maintenant, quelle est la prochaine étape ?</h2>

        <p>Vous envisagez de devenir formateur pour adultes, mais vous voulez passer à l'action de façon structurée et sécurisée ? Ne laissez pas votre projet au stade de l'intention.</p>

        <p>Chez Atipik RH, nous accompagnons les futurs formateurs de la réflexion à la concrétisation, grâce à une formation de <strong>Formateur Professionnel d'Adultes (FPA)</strong> pensée pour les parcours en reconversion et les profils expérimentés.</p>

        <p>Cette formation vous permet de :</p>

        <ul>
          <li>adopter la posture de formateur professionnel</li>
          <li>acquérir les fondamentaux de la pédagogie pour adultes</li>
          <li>structurer et animer des formations efficaces</li>
          <li>transformer votre expérience en véritable compétence transmissible</li>
        </ul>

        <p>Avant de vous lancer, nous vous aidons à vérifier que cette voie est la bonne pour vous, et à sécuriser votre parcours (positionnement, financement, débouchés).</p>

        <div style="margin: 2rem 0; padding: 1.5rem; background-color: #f8f9fa; border-left: 4px solid #013F63; border-radius: 8px;">
          <p style="margin-bottom: 1rem;"><strong>Prêt à vous lancer dans cette aventure professionnelle ?</strong></p>
          <p style="margin-bottom: 1rem;">
            <a href="/s-inscrire" style="display: inline-block; padding: 12px 24px; background-color: #013F63; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; margin-right: 1rem; transition: background-color 0.3s;">M'inscrire à la formation Formateur Professionnel d'Adultes (FPA)</a>
          </p>
          <p style="margin-top: 1rem; margin-bottom: 0;">
            <strong>Vous avez encore des questions sur votre projet ou sur les financements possibles ?</strong><br/>
            <a href="/contact" style="display: inline-block; padding: 12px 24px; border: 2px solid #013F63; color: #013F63; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 0.5rem; transition: background-color 0.3s;">Échanger avec un conseiller Atipik RH</a>
          </p>
        </div>

        <hr />

        <p><em>Découvrez aussi nos autres articles sur la <a href="/blog/formation-conseiller-insertion-professionnelle-lormont">formation CIP</a> et le <a href="/blog/financer-bilan-vae-formation-atipik-rh">financement des formations</a>.</em></p>
      `
    },
    {
      id: 16,
      slug: "financer-bilan-competences-2026-cpf-france-travail-employeur",
      title: "Comment financer un bilan de compétences en 2026 ? (CPF, France Travail, employeur)",
      excerpt: "Guide complet pour financer votre bilan de compétences en 2026 : CPF, financement employeur, France Travail, FAF pour indépendants. Toutes les solutions pour lever le frein financier et investir sereinement dans votre avenir professionnel.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop&q=80",
      date: "13 janvier 2026",
      readTime: "12 min",
      author: "Vanessa NOAH EWODO",
      category: "Bilan de compétences",
      keywords: "financement bilan compétences, bilan compétences CPF, financer bilan compétences 2026, France Travail bilan compétences, employeur finance bilan compétences, Aide Individuelle Formation, Fonds Assurance Formation indépendant",
      content: `
        <p>Vous ressentez le besoin de changer d'air, de redonner du sens à votre carrière ou de sécuriser un nouveau projet professionnel ? Le bilan de compétences est un outil puissant pour faire le point, identifier vos forces et construire une trajectoire réaliste.</p>

        <p>Mais une question revient presque toujours en premier : <strong>combien ça coûte… et surtout, qui paye ?</strong></p>

        <p>Bonne nouvelle : en 2026, plusieurs dispositifs existent pour financer tout ou partie de votre bilan de compétences, parfois sans avancer de frais. Voici un guide clair pour lever le frein financier et investir sereinement dans votre avenir professionnel.</p>

        <h2>1. Le Compte Personnel de Formation (CPF) : l'autonomie avant tout</h2>

        <p>Le CPF reste le levier principal pour financer un bilan de compétences.</p>

        <p>Chaque actif (salarié, demandeur d'emploi, indépendant) cumule des droits en euros tout au long de sa vie professionnelle.</p>

        <h3>Comment ça fonctionne ?</h3>

        <ul>
          <li>Vous choisissez librement votre organisme de bilan de compétences</li>
          <li>Vous mobilisez vos droits directement via la plateforme officielle <a href="https://www.moncompteformation.gouv.fr" target="_blank" rel="noopener noreferrer">Mon Compte Formation</a></li>
          <li>Le financement est individuel et confidentiel</li>
        </ul>

        <h3>Ce qu'il faut savoir en 2026</h3>

        <ul>
          <li>Une participation forfaitaire peut être demandée selon votre situation</li>
          <li>Cette participation peut parfois être prise en charge ou exonérée (selon les politiques publiques ou accords de branche)</li>
        </ul>

        <h3>Les avantages</h3>

        <ul>
          <li>Aucun accord de l'employeur requis si le bilan est réalisé hors temps de travail</li>
          <li>Démarche simple et rapide</li>
          <li>Liberté de choix de l'organisme</li>
        </ul>

        <p><strong>C'est la solution idéale si vous souhaitez avancer de manière discrète et autonome.</strong></p>

        <h2>2. Le financement par l'employeur : un outil de sécurisation des parcours</h2>

        <p>Si votre réflexion s'inscrit dans une évolution interne, une mobilité ou une prévention de l'usure professionnelle, votre employeur peut financer votre bilan.</p>

        <h3>Le cadre</h3>

        <ul>
          <li>Le bilan de compétences est intégré au Plan de Développement des Compétences</li>
          <li>L'entreprise prend en charge les frais pédagogiques</li>
          <li>Le salaire est maintenu si le bilan se déroule sur le temps de travail</li>
        </ul>

        <h3>Le bon angle à adopter</h3>

        <p>Lors d'un entretien professionnel ou annuel, présentez le bilan comme :</p>

        <ul>
          <li>Un outil de fidélisation,</li>
          <li>Un levier de motivation,</li>
          <li>Ou un moyen de prévenir l'épuisement professionnel et les ruptures de parcours.</li>
        </ul>

        <p><strong>Bien positionné, le bilan de compétences est un investissement gagnant-gagnant pour le salarié comme pour l'employeur.</strong></p>

        <h2>3. France Travail (ex-Pôle emploi) : un appui pour les demandeurs d'emploi</h2>

        <p>Si vous êtes actuellement en recherche d'emploi, le bilan de compétences peut être un outil structurant pour sécuriser votre retour à l'emploi.</p>

        <h3>Les solutions possibles</h3>

        <ul>
          <li>Mobilisation de votre CPF</li>
          <li>Complément de financement via l'Aide Individuelle à la Formation (AIF) si vos droits sont insuffisants</li>
        </ul>

        <h3>Les conditions</h3>

        <ul>
          <li>Le bilan doit être validé par votre conseiller France Travail</li>
          <li>Il doit s'inscrire clairement dans votre projet de retour à l'emploi ou de reconversion</li>
        </ul>

        <h3>Conseil clé : préparez un argumentaire montrant que le bilan va :</h3>

        <ul>
          <li>Clarifier votre projet,</li>
          <li>Raccourcir votre période de chômage,</li>
          <li>Renforcer votre employabilité.</li>
        </ul>

        <h2>4. Et pour les indépendants ?</h2>

        <p>Les travailleurs indépendants peuvent mobiliser leur Fonds d'Assurance Formation (FAF) (ex. : AGEFICE, FIF PL, FAFCEA selon l'activité).</p>

        <p>Les modalités varient selon les fonds, mais le bilan de compétences peut être pris en charge partiellement ou totalement, sous conditions.</p>

        <h2>Pourquoi ne pas attendre ?</h2>

        <p>Un bilan de compétences n'est pas une dépense, c'est un investissement à fort impact. En 2026, le marché du travail valorise plus que jamais :</p>

        <ul>
          <li>L'adaptabilité,</li>
          <li>La connaissance de ses compétences,</li>
          <li>Les parcours construits et assumés.</li>
        </ul>

        <p>Attendre, c'est parfois :</p>

        <ul>
          <li>Laisser dormir ses droits CPF,</li>
          <li>Rester bloqué dans une situation inconfortable,</li>
          <li>Ou subir une transition plutôt que la choisir.</li>
        </ul>

        <p><strong>Bon à savoir :</strong> un bilan de compétences dure en moyenne 24 heures, réparties sur plusieurs semaines, avec un rythme compatible avec la vie professionnelle et personnelle.</p>

        <h2>Tableau récapitulatif des financements en 2026</h2>

        <div style="overflow-x: auto; margin: 2rem 0;">
          <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd;">
            <thead>
              <tr style="background-color: #013F63; color: white;">
                <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Profil</th>
                <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Dispositif principal</th>
                <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Accord nécessaire ?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd;">Salarié (démarche personnelle)</td>
                <td style="padding: 12px; border: 1px solid #ddd;">CPF (hors temps de travail)</td>
                <td style="padding: 12px; border: 1px solid #ddd;">Non</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 12px; border: 1px solid #ddd;">Salarié (démarche co-construite)</td>
                <td style="padding: 12px; border: 1px solid #ddd;">Plan de développement des compétences</td>
                <td style="padding: 12px; border: 1px solid #ddd;">Oui (employeur)</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd;">Demandeur d'emploi</td>
                <td style="padding: 12px; border: 1px solid #ddd;">CPF + AIF France Travail</td>
                <td style="padding: 12px; border: 1px solid #ddd;">Oui (conseiller)</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 12px; border: 1px solid #ddd;">Indépendant</td>
                <td style="padding: 12px; border: 1px solid #ddd;">Fonds d'Assurance Formation</td>
                <td style="padding: 12px; border: 1px solid #ddd;">Selon critères</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Prêt·e à faire le point sur votre avenir professionnel ?</h2>

        <p>Le financement ne doit plus être un frein à votre épanouissement ni à votre sécurisation professionnelle. Être accompagné·e dans un bilan de compétences, c'est reprendre la main sur son parcours — avec méthode, humanité et réalisme.</p>

        <p>Chez <a href="/bilan-de-competences">ATIPIK RH</a>, nous vous accompagnons à chaque étape, y compris dans la mobilisation des financements.</p>

        <p><strong>Parce que chaque parcours mérite d'être reconnu, valorisé et choisi.</strong></p>

        <hr />

        <p><em>Découvrez aussi nos autres articles sur le <a href="/blog/portefeuille-competences-insertion-reconversion-employabilite">portefeuille de compétences</a> et le <a href="/blog/financer-bilan-vae-formation-atipik-rh">financement des formations</a>.</em></p>
      `
    },
    {
      id: 15,
      slug: "portefeuille-competences-insertion-reconversion-employabilite",
      title: "Portefeuille de compétences : un outil stratégique pour l'insertion professionnelle et la reconversion",
      excerpt: "Dans un contexte de mutations du marché du travail, l'insertion professionnelle, la reconversion professionnelle et le bilan de compétences sont devenus des leviers essentiels pour renforcer l'employabilité et sécuriser les parcours.",
      image: "/images/hero/bilan-competences.jpg",
      date: "7 janvier 2026",
      readTime: "5 min",
      author: "Vanessa NOAH EWODO",
      category: "Bilan de compétences",
      keywords: "portefeuille compétences, insertion professionnelle, reconversion professionnelle, employabilité, compétences transférables, CIP, bilan compétences, ATIPIK RH",
      content: `
        <p>Dans un contexte de mutations du marché du travail, l'insertion professionnelle, la reconversion professionnelle et le bilan de compétences sont devenus des leviers essentiels pour renforcer l'employabilité et sécuriser les parcours. Chez ATIPIK RH, nous accompagnons les personnes, avec ou sans diplôme, dans la valorisation de leurs compétences et la construction de projets professionnels durables.</p>

        <h2>Le portefeuille de compétences : définition et enjeux</h2>

        <p>Le portefeuille de compétences est un outil stratégique qui permet de recenser, organiser et valoriser l'ensemble des compétences acquises tout au long de la vie professionnelle et personnelle. Il dépasse la simple liste de diplômes pour mettre en lumière les savoir-faire, savoir-être et savoir-agir développés dans différents contextes.</p>

        <p>Cet outil prend tout son sens dans un marché du travail en constante évolution où les parcours professionnels sont de plus en plus diversifiés. Il permet de valoriser les parcours atypiques, reconnaître l'expérience acquise hors du cadre formel, faciliter l'identification des compétences transférables et sécuriser les transitions professionnelles.</p>

        <h2>L'accompagnement par les Conseillers en Insertion Professionnelle</h2>

        <p>Nos conseillers en insertion professionnelle (CIP) s'appuient sur le portefeuille de compétences pour accompagner des publics aux parcours variés, parfois atypiques, vers l'emploi, la formation ou la reconversion professionnelle.</p>

        <p>Chaque personne possède un parcours unique. Nos CIP adoptent une approche sur-mesure qui prend en compte la diversité des parcours (avec ou sans diplôme), les compétences formelles et informelles, les aspirations et motivations, ainsi que le contexte local du marché de l'emploi en Gironde.</p>

        <p>Notre méthode d'accompagnement structurée permet d'identifier les compétences, les organiser et les catégoriser, les valoriser pour les employeurs, identifier les compétences transférables vers de nouveaux secteurs, et construire un projet professionnel réaliste.</p>

        <h2>Un outil stratégique de reconversion professionnelle</h2>

        <p>Le portefeuille de compétences est un outil stratégique de reconversion professionnelle, permettant d'identifier les compétences transférables, de sécuriser les transitions et de construire un projet professionnel réaliste et progressif.</p>

        <p>Lors d'une reconversion, toutes les compétences ne sont pas perdues. Le portefeuille permet de repérer les compétences transversales (communication, gestion de projet, travail en équipe, adaptabilité), valoriser l'expérience acquise même dans un nouveau secteur, et construire un argumentaire solide pour expliquer comment les compétences passées sont pertinentes pour le nouveau projet.</p>

        <p>Une reconversion professionnelle peut être source d'inquiétude. Le portefeuille de compétences offre une vision claire de ses atouts, un plan d'action pour identifier les compétences à développer, une progression réaliste étape par étape, et une base solide sur laquelle s'appuyer en cas de difficultés.</p>

        <h2>Renforcer l'employabilité et la confiance en soi</h2>

        <p>En rendant visibles les compétences acquises dans et hors du cadre formel, cet outil renforce l'employabilité, la confiance en soi et la capacité à se positionner face aux employeurs et partenaires de l'insertion.</p>

        <p>Le portefeuille améliore l'employabilité en offrant une meilleure visibilité des compétences, une argumentation solide avec des exemples concrets et facilite l'adaptation aux offres d'emploi. Pour les personnes sans diplôme ou aux parcours atypiques, il légitime l'expérience, réduit l'auto-censure et renforce l'estime de soi. Avec un portefeuille bien construit, il devient plus facile de rédiger un CV efficace, préparer les entretiens et construire un réseau professionnel.</p>

        <div style="margin: 2rem 0;">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop" 
            alt="Reconversion professionnelle et développement des compétences transférables"
            style="width: 100%; height: auto; border-radius: 1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
          />
        </div>

        <h2>L'accompagnement ATIPIK RH</h2>

        <p>Chez ATIPIK RH, nos conseillers en insertion professionnelle accompagnent tous les publics (avec ou sans diplôme, jeunes ou seniors) en utilisant des méthodes éprouvées et une connaissance approfondie du marché de l'emploi en Gironde.</p>

        <p>Le portefeuille de compétences s'intègre naturellement dans nos accompagnements : <a href="/bilan-de-competences">bilan de compétences</a>, <a href="/formation-conseiller-insertion-professionnelle">formation CIP</a>, accompagnement à la reconversion et valorisation de l'expérience.</p>

        <p><strong>Prêt à valoriser vos compétences et à construire votre projet professionnel ?</strong> Contactez-nous pour découvrir comment nous pouvons vous accompagner dans cette démarche.</p>

        <hr />

        <p><em>Découvrez aussi nos autres articles sur le <a href="/blog/bilan-competences-lormont-5-etapes-reconversion">bilan de compétences</a> et la <a href="/blog/reconversion-professionnelle-comment-reussir-changement-carriere">reconversion professionnelle</a>.</em></p>
      `
    },
    {
      id: 3,
      slug: "vae-valoriser-experience-obtenir-diplome",
      title: "VAE : valoriser son expérience pour obtenir un diplôme",
      excerpt: "La Validation des Acquis de l'Expérience peut vous permettre d'obtenir une certification reconnue.",
      image: "/images/hero/vae.jpg",
      date: "5 janvier 2025",
      readTime: "6 min",
      author: "Stéphanie BRETON",
      category: "VAE",
      keywords: "VAE, validation acquis expérience, diplôme expérience, certification professionnelle",
      content: `
        <p>La VAE (Validation des Acquis de l'Expérience) permet d'obtenir une certification professionnelle grâce à son expérience professionnelle et personnelle.</p>
        
        <h2>Qui peut prétendre à la VAE ?</h2>
        <p>Toute personne ayant au moins 1 an d'expérience en rapport direct avec la certification visée peut entreprendre une démarche VAE.</p>
        
        <h2>Les étapes de la VAE</h2>
        <ol>
          <li><strong>Information et conseil</strong> : Définir votre projet VAE</li>
          <li><strong>Recevabilité</strong> : Vérifier l'adéquation entre votre expérience et la certification</li>
          <li><strong>Accompagnement</strong> : Rédaction du dossier de validation</li>
          <li><strong>Validation</strong> : Passage devant le jury</li>
        </ol>
        
        <p>Notre équipe vous accompagne tout au long de cette démarche pour maximiser vos chances de réussite.</p>
      `
    },
    {
      id: 4,
      slug: "bilan-competences-lormont-5-etapes-reconversion",
      title: "Bilan de compétences à Lormont : 5 étapes pour réussir sa reconversion professionnelle",
      excerpt: "Découvrez notre méthode en 5 étapes pour construire sereinement votre projet de reconversion grâce au bilan de compétences à Lormont.",
      image: "/images/hero/bilan-competences.jpg",
      date: "28 décembre 2024",
      readTime: "8 min",
      author: "Vanessa NOAH EWODO",
      category: "Bilan de compétences",
      keywords: "bilan compétences Lormont, reconversion professionnelle, 5 étapes, accompagnement carrière",
      content: `
        <p>Vous ressentez le besoin de donner un nouveau souffle à votre carrière ? Vous habitez Lormont ou la région bordelaise et vous vous interrogez sur vos perspectives d'évolution professionnelle ? Le bilan de compétences représente un tremplin idéal pour construire sereinement votre projet de reconversion. Notre centre de formation à Lormont vous accompagne dans cette démarche structurée en 5 étapes clés.</p>

        <h2>Qu'est-ce qu'un bilan de compétences ?</h2>

        <p>Le bilan de compétences est un dispositif d'accompagnement professionnel qui permet d'analyser ses compétences, aptitudes et motivations pour définir un projet professionnel réaliste et réalisable. Encadré par le Code du travail, il se déroule sur 24 heures maximum, réparties généralement sur 2 à 3 mois.</p>

        <p>À Lormont, proche de Bordeaux, notre centre propose un accompagnement personnalisé qui tient compte des spécificités du marché de l'emploi en Gironde et des opportunités de formation disponibles localement.</p>

        <h2>Étape 1 : La phase préliminaire - Définir vos objectifs</h2>

        <p>La première étape consiste à clarifier vos attentes et définir le cadre de votre bilan de compétences. Lors de cet entretien initial dans notre centre de Lormont, votre consultant vous aide à :</p>

        <ul>
          <li><strong>Identifier vos motivations</strong> : Pourquoi souhaitez-vous entreprendre ce bilan ? Ennui professionnel, besoin d'évolution, projet de création d'entreprise ?</li>
          <li><strong>Préciser vos contraintes</strong> : Situation familiale, géographique, financière</li>
          <li><strong>Définir les objectifs du bilan</strong> : Reconversion complète, évolution dans votre secteur, validation de projet</li>
        </ul>

        <p>Cette phase préparatoire, d'une durée de 2 à 3 heures, établit les fondations de votre parcours. Elle permet également de vous familiariser avec la méthodologie et de créer une relation de confiance avec votre accompagnateur.</p>

        <h2>Étape 2 : L'investigation - Explorer vos compétences et votre potentiel</h2>

        <p>C'est le cœur du bilan de compétences, la phase la plus longue (environ 15 heures). À Lormont, nous utilisons des outils d'évaluation reconnus pour dresser un inventaire complet de votre profil professionnel :</p>

        <h3>Analyse de vos compétences</h3>
        <ul>
          <li><strong>Compétences techniques</strong> : Savoir-faire spécifiques à votre métier</li>
          <li><strong>Compétences transversales</strong> : Communication, management, organisation</li>
          <li><strong>Compétences comportementales</strong> : Adaptabilité, autonomie, esprit d'équipe</li>
        </ul>

        <h3>Exploration de votre personnalité professionnelle</h3>
        <ul>
          <li>Tests de personnalité et d'orientation</li>
          <li>Identification de vos valeurs et motivations profondes</li>
          <li>Analyse de votre rapport au travail et à l'autorité</li>
        </ul>

        <h3>Investigation du marché de l'emploi local</h3>
        <p>Notre proximité avec Bordeaux nous permet d'avoir une connaissance fine du marché de l'emploi en Gironde. Nous explorons ensemble :</p>
        <ul>
          <li>Les secteurs porteurs de la région bordelaise</li>
          <li>Les entreprises qui recrutent à Lormont et ses environs</li>
          <li>Les formations disponibles localement</li>
        </ul>

        <p>Cette phase peut inclure des rencontres avec des professionnels, des visites d'entreprises ou la participation à des forums emploi dans l'agglomération bordelaise.</p>

        <h2>Étape 3 : Validation de votre projet professionnel</h2>

        <p>Fort des éléments recueillis lors de l'investigation, vous construisez maintenant votre projet professionnel. Cette étape cruciale permet de :</p>

        <h3>Définir vos pistes professionnelles</h3>
        <p>À partir de vos compétences et aspirations, plusieurs options se dessinent. Notre rôle est de vous aider à les hiérarchiser selon leur faisabilité et leur adéquation avec le marché local.</p>

        <h3>Tester la réalité de votre projet</h3>
        <ul>
          <li>Enquêtes métier auprès de professionnels bordelais</li>
          <li>Stages d'observation ou périodes d'immersion</li>
          <li>Validation des prérequis et formations nécessaires</li>
        </ul>

        <h3>Construire votre plan d'action</h3>
        <p>Chaque projet de reconversion nécessite une stratégie adaptée. Nous élaborons ensemble un plan d'action réaliste avec :</p>
        <ul>
          <li>Les étapes de votre transition professionnelle</li>
          <li>Le calendrier de mise en œuvre</li>
          <li>Les formations à envisager (possiblement dans notre centre de Lormont)</li>
          <li>Les démarches administratives et financières</li>
        </ul>

        <h2>Étape 4 : La synthèse et les recommandations</h2>

        <p>Cette phase de conclusion (2 à 3 heures) fait le bilan de votre parcours. Vous repartez avec :</p>

        <h3>Un document de synthèse personnalisé</h3>
        <ul>
          <li>Récapitulatif de vos compétences et atouts</li>
          <li>Présentation détaillée de votre projet professionnel</li>
          <li>Plan d'action avec échéances précises</li>
          <li>Recommandations de formations et d'accompagnements</li>
        </ul>

        <h3>Des outils pour la suite</h3>
        <ul>
          <li>Techniques de recherche d'emploi adaptées à votre profil</li>
          <li>Conseils pour optimiser votre CV et votre profil LinkedIn</li>
          <li>Préparation aux entretiens d'embauche</li>
          <li>Carnet d'adresses de contacts professionnels locaux</li>
        </ul>

        <h2>Étape 5 : Le suivi post-bilan</h2>

        <p>Votre bilan de compétences à Lormont ne s'arrête pas avec la remise du document de synthèse. Nous proposons un accompagnement dans la durée :</p>

        <h3>Suivi à 3 mois</h3>
        <p>Point sur l'avancement de votre projet et ajustements éventuels de votre plan d'action.</p>

        <h3>Suivi à 6 mois</h3>
        <p>Bilan des démarches entreprises, des difficultés rencontrées et des succès obtenus.</p>

        <h3>Accompagnement continu</h3>
        <p>Possibilité de sessions de coaching individuelles ou de participation à nos ateliers collectifs (recherche d'emploi, création d'entreprise, etc.).</p>

        <h2>Témoignage : Marie, 42 ans, reconversion réussie</h2>

        <blockquote>
          <p><em>"Après 15 ans dans l'administration, je me sentais en décalage avec mes aspirations. Le bilan de compétences réalisé dans le centre de Lormont m'a permis de découvrir mes vraies motivations et de me diriger vers la formation d'adultes. Aujourd'hui, je suis formatrice en bureautique et j'épanouis pleinement dans cette nouvelle voie. L'accompagnement bienveillant et la connaissance du tissu économique local ont été déterminants dans ma réussite."</em></p>
        </blockquote>

        <h2>Financer votre bilan de compétences à Lormont</h2>

        <p>Plusieurs dispositifs permettent de financer votre bilan de compétences :</p>

        <ul>
          <li><strong>Le Compte Personnel de Formation (CPF)</strong> : Utilisez vos droits acquis pour financer tout ou partie de votre bilan</li>
          <li><strong>Le Plan de Développement des Compétences</strong> : Si vous êtes salarié, votre employeur peut prendre en charge votre bilan</li>
          <li><strong>France Travail</strong> : Pour les demandeurs d'emploi, sous certaines conditions</li>
          <li><strong>L'OPCO de votre secteur</strong> : Pour les salariés en CDD ou intérimaires</li>
        </ul>

        <p>Notre équipe vous accompagne dans les démarches de financement et vous aide à identifier la solution la plus adaptée à votre situation.</p>

        <h2>Pourquoi choisir notre centre de formation à Lormont ?</h2>

        <p>Situé au cœur de Lormont, à quelques minutes de Bordeaux, notre centre bénéficie d'un emplacement idéal :</p>

        <ul>
          <li><strong>Accessibilité</strong> : Facilement accessible en transports en commun (tramway, bus) et en voiture</li>
          <li><strong>Proximité</strong> : Au cœur du bassin d'emploi bordelais, nous connaissons parfaitement le marché local</li>
          <li><strong>Expertise</strong> : Nos consultants certifiés cumulent plusieurs années d'expérience dans l'accompagnement professionnel</li>
          <li><strong>Réseau</strong> : Nous entretenons des relations privilégiées avec les entreprises et organismes de formation de la région</li>
        </ul>

        <h2>Prêt à franchir le cap ?</h2>

        <p>La reconversion professionnelle est un projet qui se mûrit et se construit. Le bilan de compétences représente une étape essentielle pour sécuriser votre démarche et maximiser vos chances de réussite.</p>

        <p>À Lormont, notre centre vous propose un accompagnement sur-mesure, adapté à vos objectifs et aux réalités du marché de l'emploi local. N'hésitez plus : contactez-nous pour programmer un premier entretien gratuit et sans engagement.</p>

        <p><strong>Votre nouvelle vie professionnelle commence à Lormont, aux portes de Bordeaux !</strong></p>

        <hr />

        <p><em>Vous souhaitez en savoir plus sur nos formations CIP (Conseiller en Insertion Professionnelle) ou FPA (Formateur Professionnel d'Adultes) ? Découvrez nos programmes complets et nos modalités de financement en consultant nos autres articles ou en nous contactant directement.</em></p>
      `
    },
    {
      id: 5,
      slug: "soft-skills-competences-difference",
      title: "Les soft skills : ces compétences qui font la différence",
      excerpt: "Découvrez pourquoi les soft skills — communication, adaptabilité, intelligence émotionnelle — deviennent essentielles pour booster votre carrière en 2025 et comment les développer.",
      image: "/images/hero/bilan-competences.jpg",
      date: "10 juillet 2024",
      readTime: "8 min",
      author: "Brunilda RAFAEL",
      category: "Conseils",
      keywords: "soft skills, compétences comportementales, compétences transversales, évolution professionnelle",
      content: `
        <p><strong>TL;DR :</strong> à l'ère de l'intelligence artificielle, 80 % des recruteurs estiment que les soft skills pèsent autant — voire plus — que la technicité pure lors d'un recrutement.</p>

        <h2>1. Qu'appelle-t-on « soft skills » ?</h2>

        <p>Les <em>soft skills</em> sont les compétences <strong>comportementales</strong> et <strong>relationnelles</strong> : communication, empathie, créativité, gestion du temps, etc.<br>
        Elles complètent les <em>hard skills</em> (savoir-faire techniques) et deviennent différenciantes lorsque tous les candidats maîtrisent déjà les bases métier.</p>

        <h2>2. Pourquoi les soft skills explosent-elles en 2025 ?</h2>

        <ol>
          <li><strong>Automatisation accrue</strong> : les tâches répétitives sont déléguées aux IA.</li>
          <li><strong>Télétravail généralisé</strong> : la collaboration asynchrone demande davantage de clarté de communication.</li>
          <li><strong>Marché incertain</strong> : les organisations valorisent l'adaptabilité et la résolution de problèmes.</li>
        </ol>

        <blockquote>
          <p><strong>Stat clé :</strong> LinkedIn Learning rapporte que 92 % des dirigeants considèrent les soft skills comme plus importantes que jamais.</p>
        </blockquote>

        <h2>3. Top 6 des soft skills plébiscitées par les recruteurs</h2>

        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <thead>
            <tr style="background-color: #f8f9fa;">
              <th style="border: 1px solid #dee2e6; padding: 12px; text-align: left;"><strong>Rang</strong></th>
              <th style="border: 1px solid #dee2e6; padding: 12px; text-align: left;"><strong>Compétence</strong></th>
              <th style="border: 1px solid #dee2e6; padding: 12px; text-align: left;"><strong>Pourquoi elle compte</strong></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid #dee2e6; padding: 12px;">1</td>
              <td style="border: 1px solid #dee2e6; padding: 12px;"><strong>Adaptabilité</strong></td>
              <td style="border: 1px solid #dee2e6; padding: 12px;">Environnement VUCA, projets agiles.</td>
            </tr>
            <tr>
              <td style="border: 1px solid #dee2e6; padding: 12px;">2</td>
              <td style="border: 1px solid #dee2e6; padding: 12px;"><strong>Communication claire</strong></td>
              <td style="border: 1px solid #dee2e6; padding: 12px;">Slack, visio, emails : la clarté évite les frictions.</td>
            </tr>
            <tr>
              <td style="border: 1px solid #dee2e6; padding: 12px;">3</td>
              <td style="border: 1px solid #dee2e6; padding: 12px;"><strong>Pensée critique</strong></td>
              <td style="border: 1px solid #dee2e6; padding: 12px;">Tri d'information, décisions data-driven.</td>
            </tr>
            <tr>
              <td style="border: 1px solid #dee2e6; padding: 12px;">4</td>
              <td style="border: 1px solid #dee2e6; padding: 12px;"><strong>Intelligence émotionnelle</strong></td>
              <td style="border: 1px solid #dee2e6; padding: 12px;">Management à distance, conflits interculturels.</td>
            </tr>
            <tr>
              <td style="border: 1px solid #dee2e6; padding: 12px;">5</td>
              <td style="border: 1px solid #dee2e6; padding: 12px;"><strong>Créativité</strong></td>
              <td style="border: 1px solid #dee2e6; padding: 12px;">Innovation produit, résolution de problèmes complexes.</td>
            </tr>
            <tr>
              <td style="border: 1px solid #dee2e6; padding: 12px;">6</td>
              <td style="border: 1px solid #dee2e6; padding: 12px;"><strong>Gestion du temps</strong></td>
              <td style="border: 1px solid #dee2e6; padding: 12px;">Autonomie en télétravail, multitâches maîtrisé.</td>
            </tr>
          </tbody>
        </table>

        <h2>4. Comment évaluer vos soft skills ?</h2>

        <h3>a. Auto-diagnostic rapide</h3>

        <ul>
          <li>Notez de 1 à 5 votre aisance à <em>convaincre</em> un public.</li>
          <li>Analysez vos réactions face à un changement imprévu.</li>
          <li>Mesurez la clarté de vos écrits (mails relus ?).</li>
        </ul>



        <h3>b. Feedback 360°</h3>

        <p>Demandez à 3 collègues et 1 manager de noter vos forces et axes d'amélioration.<br>
        Synthétisez les thèmes récurrents : ce sont vos soft skills dominantes (ou manquantes).</p>

        <h2>5. 5 actions concrètes pour développer vos soft skills</h2>

        <ol>
          <li><strong>Rejoignez un club Toastmasters</strong> pour travailler la prise de parole.</li>
          <li><strong>Pratiquez la méthode SCRUM</strong> en side-project → pensée critique &amp; adaptabilité.</li>
          <li><strong>Tenez un journal émotionnel</strong> 10 min/jour → intelligence émotionnelle.</li>
          <li><strong>Bloquez des créneaux "Deep Work"</strong> → gestion du temps.</li>
          <li><strong>Participez à des hackathons</strong> → créativité + collaboration.</li>
        </ol>

        <h2>6. Soft skills &amp; bilan de compétences : un duo gagnant</h2>

        <p>Notre <strong>bilan de compétences</strong> intègre un module dédié :</p>

        <ul>
          <li>Test <em>DISC</em> ou <em>Process Com</em> pour identifier votre profil.</li>
          <li>Séances de coaching ciblées (communication, leadership).</li>
          <li>Plan d'action 90 jours pour ancrer les comportements.</li>
        </ul>

        <p>Pour faire le point sur vos compétences comportementales et techniques, commencez par notre <a href="/bilan-de-competences/quiz" style="color: #FE6400; font-weight: 600;">quiz bilan de compétences</a> qui vous donnera un premier aperçu de votre profil professionnel.</p>

        <hr style="margin: 40px 0; border: none; border-top: 1px solid #dee2e6;">

        <h2>FAQ</h2>

        <div style="margin: 30px 0;">
          <div style="border: 1px solid #e9ecef; border-radius: 10px; margin-bottom: 15px; overflow: hidden;">
            <h4 style="background-color: #f8f9fa; padding: 15px; margin: 0; color: #013F63;">Les soft skills peuvent-elles vraiment s'apprendre ?</h4>
            <div style="padding: 15px;">
              <p style="margin: 0;">Oui. Comme toute compétence, elles se développent par la pratique, le feedback et la réflexivité. Un coaching ciblé accélère le processus.</p>
            </div>
          </div>
          
          <div style="border: 1px solid #e9ecef; border-radius: 10px; margin-bottom: 15px; overflow: hidden;">
            <h4 style="background-color: #f8f9fa; padding: 15px; margin: 0; color: #013F63;">Quelles soft skills pour un poste de manager ?</h4>
            <div style="padding: 15px;">
              <p style="margin: 0;">Leadership, intelligence émotionnelle, communication assertive et gestion de conflits sont prioritaires.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 6,
      slug: "preparer-entretien-embauche-conseils-experts",
      title: "Préparer son entretien d'embauche : nos conseils d'experts",
      excerpt: "Les techniques et astuces pour réussir ses entretiens et convaincre les recruteurs.",
      image: "/images/hero/vae.jpg",
      date: "15 décembre 2024",
      readTime: "8 min",
      author: "Brunilda RAFAEL",
      category: "Recherche d'emploi",
      keywords: "entretien embauche, conseils recrutement, préparation entretien, techniques recruteurs",
      content: `
        <p>Un entretien d'embauche ne se résume pas à répondre à des questions : c'est une rencontre professionnelle décisive. Bien préparé, vous augmentez vos chances de convaincre et de faire la différence face aux autres candidats.</p>
        
        <p>Voici les conseils de nos formatrices et accompagnantes chez Atipik RH pour aborder votre entretien avec sérénité et efficacité.</p>
        
        <h2>1. Comprendre l'objectif de l'entretien</h2>
        
        <p>L'entretien d'embauche permet au recruteur de :</p>
        <ul>
          <li>valider votre motivation</li>
          <li>vérifier l'adéquation de votre profil avec le poste</li>
          <li>évaluer votre posture professionnelle et votre communication</li>
        </ul>
        
        <p>De votre côté, c'est aussi l'occasion de :</p>
        <ul>
          <li>mieux comprendre les missions proposées</li>
          <li>poser des questions</li>
          <li>vérifier si l'entreprise correspond à vos valeurs et objectifs</li>
        </ul>
        
        <h2>2. Bien se renseigner en amont</h2>
        
        <p>Avant tout entretien, prenez le temps de vous renseigner :</p>
        <ul>
          <li>sur l'entreprise (site, réseaux, actualités)</li>
          <li>sur le poste (fiche de poste, annonces similaires)</li>
          <li>sur votre interlocuteur si vous le connaissez (LinkedIn, parcours)</li>
        </ul>

        <p>Cela vous permettra de personnaliser vos réponses et de montrer votre intérêt réel pour l'entreprise.</p>

        <h2>3. Préparer les questions classiques… et vos réponses</h2>
        
        <p>Il y a des questions incontournables à anticiper. Exemples :</p>

        <h3>« Parlez-moi de vous »</h3>
        <p>Préparez une présentation synthétique et professionnelle (3 min max) en lien avec le poste.</p>

        <h3>« Quelles sont vos qualités / défauts ? »</h3>
        <p>Soyez honnête, nuancé et toujours orienté solution.</p>

        <h3>« Pourquoi vous et pas un autre ? »</h3>
        <p>Mettez en avant vos compétences clés, votre valeur ajoutée et votre motivation.</p>

        <h3>« Où vous voyez-vous dans 3 à 5 ans ? »</h3>
        <p>Montrez une vision claire et cohérente avec le poste.</p>

        <p>Préparez également des exemples concrets pour illustrer vos expériences (méthode STAR : Situation, Tâche, Action, Résultat).</p>

        <h2>4. Préparer vos propres questions</h2>
        
        <p>Un candidat qui ne pose aucune question peut donner l'impression d'un manque d'intérêt. Exemples de questions pertinentes :</p>
        <ul>
          <li>« Quelles sont les priorités du poste dans les 6 premiers mois ? »</li>
          <li>« Comment se passe l'intégration d'un nouveau collaborateur ? »</li>
          <li>« Quels sont les principaux défis de l'équipe aujourd'hui ? »</li>
        </ul>

        <h2>5. Soigner sa posture et sa communication non verbale</h2>
        
        <p>Les premières minutes sont souvent décisives. Quelques bonnes pratiques :</p>
        <ul>
          <li>Arriver à l'heure (voire 5 minutes avant)</li>
          <li>Soigner sa tenue, adaptée au secteur</li>
          <li>Regarder dans les yeux, sourire, écouter activement</li>
          <li>Gérer son stress avec une respiration posée</li>
          <li>Ne pas couper la parole, reformuler si besoin</li>
        </ul>

        <h2>6. Se préparer à l'entretien en visio</h2>
        
        <p>Les entretiens à distance sont de plus en plus fréquents. Pensez à :</p>
        <ul>
          <li>tester votre connexion et votre matériel à l'avance</li>
          <li>choisir un lieu calme et neutre</li>
          <li>positionner votre webcam à hauteur des yeux</li>
          <li>avoir votre CV imprimé ou à l'écran</li>
        </ul>

        <h2>7. Après l'entretien : faire le point</h2>
        
        <p>Prenez quelques minutes pour :</p>
        <ul>
          <li>noter ce qui s'est bien passé</li>
          <li>repérer les points à améliorer</li>
          <li>relancer le recruteur (merci + confirmation de votre motivation)</li>
        </ul>

        <h2>En résumé</h2>
        
        <p>Bien préparer son entretien, c'est :</p>
        <ul>
          <li>connaître l'entreprise et le poste</li>
          <li>anticiper les questions</li>
          <li>structurer ses réponses</li>
          <li>maîtriser sa posture</li>
          <li>oser poser des questions</li>
        </ul>

        <h2>Vous avez un entretien à venir et vous manquez de confiance ?</h2>
        
        <p>Chez Atipik RH, nos accompagnements individuels et formations incluent des entraînements à l'entretien, des mises en situation filmées, et des feedbacks personnalisés pour progresser efficacement.</p>
      `
    },
    {
      id: 2,
      slug: "financer-bilan-vae-formation-atipik-rh",
      title: "Financer votre formation professionnelle avec Atipik RH",
      excerpt: "Découvrez tous les dispositifs de financement pour vos projets de formation : CPF, France Travail, OPCO, Transitions Pro. La majorité de nos accompagnements sont finançables à 100% grâce à différents dispositifs.",
      image: "/images/hero/formations.jpg",
      date: "20 janvier 2025",
      readTime: "8 min",
      author: "Vanessa NOAH EWODO",
      category: "Financement",
      keywords: "financement formation, CPF, bilan compétences, VAE, France Travail, OPCO, Transitions Pro, AGEFIPH",
      content: `
        <p>Chez Atipik RH, nous pensons que chacun doit pouvoir évoluer professionnellement sans que le financement soit un obstacle. Bonne nouvelle : la majorité de nos accompagnements et formations sont finançables à 100% grâce à différents dispositifs.</p>

        <p>Dans cet article, nous vous expliquons en détail les différentes solutions de financement disponibles, les conditions d'éligibilité et les démarches à effectuer pour obtenir une prise en charge.</p>

        <h2>Quels accompagnements sont finançables ?</h2>

        <h3>Le bilan de compétences</h3>
        <p>Un accompagnement personnalisé de 24 heures réparties sur 8 semaines pour faire le point sur vos compétences, aptitudes et motivations, et définir un projet professionnel ou de formation cohérent. <strong>Coût : 1 680€</strong></p>

        <h3>La VAE (Validation des acquis de l'expérience)</h3>
        <p>Obtenez une certification professionnelle grâce à votre expérience. Un processus reconnu qui valorise vos compétences acquises sur le terrain (minimum 3 ans d'expérience requise). <strong>Coût : 2 400€</strong></p>

        <h3>Les formations certifiantes</h3>
        <ul>
          <li><strong>Formation FPA</strong> (Formateur Professionnel d'Adultes) : Titre professionnel de niveau 5 (Bac+2) - <strong>Coût : 8 500€</strong></li>
          <li><strong>Formation CIP</strong> (Conseiller en Insertion Professionnelle) : Titre professionnel de niveau 5 (Bac+2) - <strong>Coût : 9 200€</strong></li>
          <li><strong>Formations courtes professionnalisantes</strong> dans différents secteurs</li>
        </ul>

        <h2>Les principaux dispositifs de financement</h2>

        <h3>Le CPF – Compte Personnel de Formation</h3>
        <p>Si vous avez déjà été salarié, vous avez probablement cumulé des droits CPF. Ces crédits peuvent être utilisés pour financer un bilan de compétences, une VAE ou une formation certifiante.</p>

        <p><strong>Vos droits CPF :</strong></p>
        <ul>
          <li>Salarié : 500€ par an (plafond de 5 000€)</li>
          <li>Salarié non qualifié : 800€ par an (plafond de 8 000€)</li>
          <li>Fonctionnaire : 25 heures par an (plafond de 150 heures)</li>
        </ul>

        <p>Pour connaître vos droits, connectez-vous sur <a href="https://www.moncompteformation.gouv.fr" target="_blank" rel="noopener noreferrer"><strong>moncompteformation.gouv.fr</strong></a> avec FranceConnect. Une fois votre compte CPF suffisamment approvisionné, l'inscription se fait en quelques clics et le démarrage est possible sous 15 jours.</p>

        <p><strong>Bon à savoir :</strong> Si vos droits CPF sont insuffisants, nous vous aidons à compléter avec d'autres financements (abondement employeur, France Travail, etc.).</p>

        <h3>France Travail</h3>
        <p>Si vous êtes demandeur d'emploi, France Travail peut financer tout ou partie de votre projet grâce à plusieurs dispositifs :</p>

        <ul>
          <li><strong>AIF (Aide Individuelle à la Formation)</strong> : Financement personnalisé selon votre projet</li>
          <li><strong>RFPE (Rémunération Formation France Travail)</strong> : Maintien d'une rémunération pendant la formation</li>
          <li><strong>AFC (Action de Formation Conventionnée)</strong> : Formations prioritaires du marché du travail</li>
        </ul>

        <p><strong>Démarches :</strong> Validez d'abord votre projet avec votre conseiller France Travail, nous vous fournissons ensuite le devis et le programme détaillé, puis vous déposez la demande AIF (délai de réponse : 15 jours ouvrés).</p>

        <h3>OPCO (Opérateurs de compétences)</h3>
        <p>Si vous êtes salarié en CDI, CDD ou intérimaire, votre employeur peut faire appel à son OPCO pour financer votre formation dans le cadre :</p>

        <ul>
          <li>Du plan de développement des compétences</li>
          <li>De la ProA (Reconversion ou Promotion par alternance)</li>
          <li>Du CPF de transition pour compléter vos droits</li>
        </ul>

        <p>Nous aidons votre employeur à identifier le bon OPCO et à monter le dossier de financement. Souvent, l'employeur ne connaît pas ces possibilités !</p>

        <h3>Transitions Pro (ex-Fongecif)</h3>
        <p>Si vous êtes en reconversion professionnelle, vous pouvez faire une demande de financement dans le cadre d'un Projet de Transition Professionnelle (PTP). Ce dispositif peut financer jusqu'à 100% du coût de formation ET maintenir votre salaire pendant la formation, jusqu'à 24 mois.</p>

        <p><strong>Conditions d'éligibilité :</strong></p>
        <ul>
          <li>CDI : 24 mois d'ancienneté dont 12 mois dans l'entreprise actuelle</li>
          <li>CDD : 24 mois sur les 5 dernières années</li>
          <li>Formation certifiante et projet professionnel cohérent</li>
        </ul>

        <p><strong>Important :</strong> La demande doit être déposée 4 mois avant le début de formation. Nous vous accompagnons dans cette démarche cruciale.</p>

        <h3>AGEFIPH</h3>
        <p>Des aides spécifiques existent pour les personnes en situation de handicap (RQTH) :</p>

        <ul>
          <li><strong>Aide à la formation</strong> : Jusqu'à 4 000€ par formation</li>
          <li><strong>Complément de financement</strong> si les autres financements sont insuffisants</li>
          <li><strong>Aide technique</strong> pour du matériel spécialisé si nécessaire</li>
        </ul>

        <p>Ces aides sont souvent cumulables avec d'autres financements (CPF, France Travail...) pour une prise en charge totale.</p>

        <h2>Notre accompagnement dans vos démarches</h2>

        <p>Le financement ne doit pas être un casse-tête ! Chez Atipik RH, nous vous accompagnons gratuitement dans toutes vos démarches :</p>

        <ol>
          <li><strong>Diagnostic de votre situation</strong> : Nous analysons votre profil et identifions les financements possibles</li>
          <li><strong>Constitution du dossier</strong> : Nous préparons tous les documents nécessaires (devis, programme, attestations, argumentaire projet)</li>
          <li><strong>Dépôt et suivi</strong> : Nous vous accompagnons dans le dépôt de votre demande et assurons le suivi jusqu'à l'accord de financement</li>
        </ol>

        <p><strong>Ce service est gratuit</strong> pour toute personne intégrant un parcours avec Atipik RH.</p>

        <h2>Délais moyens d'obtention des financements</h2>

        <ul>
          <li><strong>CPF :</strong> Instantané si vos droits sont suffisants</li>
          <li><strong>France Travail :</strong> 15 jours ouvrés</li>
          <li><strong>OPCO :</strong> 1 à 2 mois</li>
          <li><strong>Transitions Pro :</strong> 2 à 4 mois (il faut anticiper !)</li>
          <li><strong>AGEFIPH :</strong> 3 semaines environ</li>
        </ul>

        <h2>En résumé : qui peut financer quoi ?</h2>

        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <thead>
            <tr style="background: #013F63; color: white;">
              <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Votre situation</th>
              <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Dispositifs de financement possibles</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background: #f8fafc;">
              <td style="padding: 12px; border: 1px solid #ddd;"><strong>Salarié</strong></td>
              <td style="padding: 12px; border: 1px solid #ddd;">CPF, OPCO, Transitions Pro</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd;"><strong>Demandeur d'emploi</strong></td>
              <td style="padding: 12px; border: 1px solid #ddd;">CPF, France Travail (AIF)</td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 12px; border: 1px solid #ddd;"><strong>Indépendant</strong></td>
              <td style="padding: 12px; border: 1px solid #ddd;">CPF, FAF (FIFPL, AGEFICE...)</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd;"><strong>Fonctionnaire</strong></td>
              <td style="padding: 12px; border: 1px solid #ddd;">CPF, Employeur public</td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 12px; border: 1px solid #ddd;"><strong>Personne en situation de handicap (RQTH)</strong></td>
              <td style="padding: 12px; border: 1px solid #ddd;">AGEFIPH + tous les autres selon situation</td>
            </tr>
          </tbody>
        </table>

        <h2>Une question ? Besoin d'aide ?</h2>

        <p>Contactez notre équipe pour obtenir un accompagnement personnalisé dans votre recherche de financement :</p>

        <ul>
          <li><strong>Par e-mail :</strong> <a href="mailto:contact@atipikrh.com">contact@atipikrh.com</a></li>
          <li><strong>Par téléphone :</strong> <a href="tel:0783019955">07 83 01 99 55</a></li>
          <li><strong>À notre bureau :</strong> 8 Rue du Courant, 33310 Lormont</li>
          <li><strong>Via notre <a href="/contact">formulaire de contact en ligne</a></strong></li>
        </ul>

        <hr />

        <p><em>Ne laissez plus le financement être un frein à votre évolution professionnelle. Chez Atipik RH, nous vous accompagnons vers la solution qui vous correspond, étape par étape.</em></p>
      `
    },
    {
      id: 8,
      slug: "reconversion-professionnelle-comment-reussir-changement-carriere",
      title: "Reconversion professionnelle : comment réussir son changement de carrière ?",
      excerpt: "La reconversion professionnelle concerne de plus en plus de Français. Découvrez les étapes clés, les dispositifs d'accompagnement et les conseils pratiques pour mener à bien votre projet de changement de carrière.",
      image: "/images/hero/bilan-competences.jpg",
      date: "22 janvier 2025",
      readTime: "10 min",
      author: "Vanessa NOAH EWODO",
      category: "Reconversion",
      keywords: "reconversion professionnelle, changement carrière, bilan compétences, formation adulte, projet professionnel, transition professionnelle",
      content: `
        <p>La reconversion professionnelle n'est plus l'exception, mais devient la règle. Selon une étude récente, près de 6 Français sur 10 envisagent ou ont déjà effectué une reconversion au cours de leur carrière. Loin d'être un échec, changer de voie professionnelle peut être l'opportunité de donner un nouveau souffle à sa vie professionnelle.</p>

        <p>Mais comment s'y prendre concrètement ? Quelles sont les étapes indispensables ? Comment éviter les pièges et maximiser ses chances de réussite ? Cet article vous guide pas à pas dans cette démarche qui peut transformer votre avenir professionnel.</p>

        <h2>Pourquoi se reconvertir ? Les principales motivations</h2>

        <p>Les raisons qui poussent à une reconversion sont multiples et souvent personnelles. Comprendre ses motivations profondes est la première étape d'une reconversion réussie.</p>

        <h3>La quête de sens</h3>
        <p>Beaucoup de professionnels ressentent un décalage entre leurs valeurs personnelles et leur travail. La recherche d'un métier qui a du sens, qui contribue positivement à la société ou qui correspond à ses convictions devient prioritaire, notamment après des périodes de remise en question comme la crise sanitaire.</p>

        <h3>L'évolution du marché du travail</h3>
        <p>Certains secteurs se transforment rapidement ou disparaissent sous l'effet de la digitalisation ou de l'automatisation. Anticiper ces mutations en se formant à de nouveaux métiers peut être une stratégie proactive de sécurisation de son parcours professionnel.</p>

        <h3>L'épanouissement personnel</h3>
        <p>L'ennui, le manque de défis, l'absence de perspectives d'évolution ou un mauvais climat de travail peuvent pousser à chercher un environnement professionnel plus stimulant et épanouissant.</p>

        <h3>Les contraintes personnelles</h3>
        <p>Des changements de vie (déménagement, situation familiale, problèmes de santé) peuvent nécessiter une adaptation du projet professionnel pour retrouver un équilibre vie privée/vie professionnelle.</p>

        <h2>Les étapes clés d'une reconversion réussie</h2>

        <h3>1. Faire le point sur sa situation actuelle</h3>
        <p>Avant de se projeter vers l'avenir, il est essentiel de faire un état des lieux honnête de sa situation :</p>
        <ul>
          <li><strong>Bilan de compétences :</strong> Quelles sont vos compétences techniques et comportementales ?</li>
          <li><strong>Analyse des motivations :</strong> Qu'est-ce qui vous plaît ou vous déplaît dans votre travail actuel ?</li>
          <li><strong>Contraintes financières :</strong> Quelle marge de manœuvre avez-vous financièrement ?</li>
          <li><strong>Situation personnelle :</strong> Quels sont vos impératifs familiaux et géographiques ?</li>
        </ul>

        <h3>2. Explorer les possibilités</h3>
        <p>Cette phase d'exploration est cruciale pour éviter de reproduire les mêmes insatisfactions :</p>
        <ul>
          <li><strong>Recherche documentaire :</strong> Étudiez les métiers qui vous intéressent, leurs conditions d'exercice, les perspectives d'évolution</li>
          <li><strong>Rencontres professionnelles :</strong> Échangez avec des personnes exerçant les métiers visés</li>
          <li><strong>Tests et mises en situation :</strong> Stages d'observation, missions bénévoles, périodes d'immersion</li>
          <li><strong>Évaluation des écarts :</strong> Identifiez les compétences à acquérir ou développer</li>
        </ul>

        <h3>3. Construire son projet professionnel</h3>
        <p>Une fois la direction choisie, il faut structurer son projet :</p>
        <ul>
          <li><strong>Définir des objectifs précis :</strong> Quel métier, dans quel secteur, dans quelle structure ?</li>
          <li><strong>Identifier les étapes :</strong> Formation, expérience complémentaire, réseau à développer</li>
          <li><strong>Planifier dans le temps :</strong> Établir un calendrier réaliste avec des échéances</li>
          <li><strong>Prévoir les moyens :</strong> Budget, temps, ressources nécessaires</li>
        </ul>

        <h3>4. Se former et acquérir de nouvelles compétences</h3>
        <p>La formation est souvent l'étape centrale de la reconversion :</p>
        <ul>
          <li><strong>Formations certifiantes :</strong> Pour acquérir les compétences techniques requises</li>
          <li><strong>Formations courtes :</strong> Pour développer des compétences spécifiques</li>
          <li><strong>Apprentissage en autodidacte :</strong> Lectures, tutoriels, MOOC</li>
          <li><strong>Expérience pratique :</strong> Projets personnels, bénévolat, stages</li>
        </ul>

        <h3>5. Activer son réseau et rechercher des opportunités</h3>
        <p>Le réseau joue un rôle déterminant dans la réussite d'une reconversion :</p>
        <ul>
          <li><strong>Réseau existant :</strong> Informez votre entourage professionnel de votre projet</li>
          <li><strong>Nouveau réseau :</strong> Participez à des événements du secteur visé</li>
          <li><strong>Réseaux sociaux professionnels :</strong> Soignez votre présence en ligne</li>
          <li><strong>Candidatures spontanées :</strong> N'hésitez pas à prendre contact directement</li>
        </ul>

        <h2>Les dispositifs d'accompagnement disponibles</h2>

        <h3>Le bilan de compétences</h3>
        <p>Véritable point de départ de nombreuses reconversions, le bilan de compétences permet de faire le point sur ses acquis, d'identifier ses motivations et de construire un projet professionnel cohérent. Finançable par le CPF, il offre un cadre structuré et l'expertise d'un consultant spécialisé.</p>

        <h3>Le Conseil en Évolution Professionnelle (CEP)</h3>
        <p>Service gratuit et personnalisé, le CEP accompagne tout actif dans l'élaboration et la mise en œuvre de son projet d'évolution professionnelle. Il peut être mobilisé à tout moment de la carrière.</p>

        <h3>Le Projet de Transition Professionnelle (PTP)</h3>
        <p>Dispositif qui permet aux salariés de suivre une formation certifiante pour changer de métier ou de profession, tout en conservant leur rémunération. Il nécessite une autorisation d'absence et un financement par Transitions Pro.</p>

        <h3>La Validation des Acquis de l'Expérience (VAE)</h3>
        <p>Pour valoriser son expérience en obtenant une certification sans reprendre d'études. Particulièrement adaptée aux reconversions vers des métiers proches de son domaine d'expertise.</p>

        <h2>Les erreurs à éviter</h2>

        <h3>Se précipiter dans l'action</h3>
        <p>La reconversion demande du temps et de la réflexion. Prendre une décision sur un coup de tête ou dans l'émotion peut conduire à des choix inadaptés. Il est important de prendre le temps de la maturation.</p>

        <h3>Idéaliser le nouveau métier</h3>
        <p>Attention aux représentations fantasmées. Chaque métier a ses contraintes et ses difficultés. Une exploration approfondie permet d'avoir une vision réaliste du quotidien professionnel visé.</p>

        <h3>Négliger l'aspect financier</h3>
        <p>Une reconversion peut impliquer une baisse temporaire de revenus ou des coûts de formation. Il est essentiel d'anticiper ces aspects pour éviter les difficultés financières.</p>

        <h3>Rester isolé</h3>
        <p>Se reconvertir seul est plus difficile et risqué. S'entourer de professionnels (consultants, formateurs) et s'appuyer sur son réseau multiplie les chances de réussite.</p>

        <h2>Reconversion et âge : il n'est jamais trop tard</h2>

        <p>L'âge est souvent perçu comme un frein à la reconversion, mais c'est souvent un faux obstacle :</p>

        <h3>Les atouts de la reconversion après 40 ans</h3>
        <ul>
          <li><strong>Expérience :</strong> Les compétences acquises sont transférables</li>
          <li><strong>Maturité :</strong> Meilleure connaissance de soi et de ses attentes</li>
          <li><strong>Réseau :</strong> Un carnet d'adresses constitué au fil des années</li>
          <li><strong>Stabilité :</strong> Situation souvent plus stable financièrement</li>
        </ul>

        <h3>Les défis à relever</h3>
        <ul>
          <li><strong>Préjugés :</strong> Certains employeurs peuvent être réticents</li>
          <li><strong>Adaptation :</strong> Nécessité de se former aux nouvelles technologies</li>
          <li><strong>Concurrence :</strong> Faire valoir son expérience face à des profils plus jeunes</li>
        </ul>

        <h2>Témoignages de reconversions réussies</h2>

        <h3>De commercial à formateur</h3>
        <p><em>"Après 15 ans dans la vente, j'avais envie de transmettre mes compétences. Grâce à une formation FPA financée par mon CPF, je suis devenu formateur en techniques commerciales. J'ai gardé mon expertise tout en donnant du sens à mon travail."</em> - Marc, 42 ans</p>

        <h3>D'assistante administrative à conseillère en insertion</h3>
        <p><em>"Le contact humain me manquait dans mon poste. La formation CIP m'a permis de me diriger vers l'accompagnement social. C'est plus qu'un métier, c'est une vocation que j'ai découverte à 38 ans."</em> - Sophie, 40 ans</p>

        <h2>Nos conseils pour réussir sa reconversion</h2>

        <h3>Prenez le temps de la réflexion</h3>
        <p>Une reconversion réussie se prépare. Ne vous précipitez pas et prenez le temps d'explorer toutes les pistes avant de faire votre choix.</p>

        <h3>Faites-vous accompagner</h3>
        <p>Un accompagnement professionnel vous aide à structurer votre démarche, éviter les écueils et optimiser vos chances de réussite.</p>

        <h3>Testez avant de vous engager</h3>
        <p>Immersion, stage, bénévolat : multipliez les expériences pour valider votre projet avant de vous lancer pleinement.</p>

        <h3>Soignez votre storytelling</h3>
        <p>Sachez expliquer votre reconversion de manière positive en montrant la cohérence de votre parcours et les compétences transférables.</p>

        <h3>Restez réaliste sur les délais</h3>
        <p>Une reconversion prend généralement entre 12 et 24 mois. Soyez patient et acceptez que les résultats ne soient pas immédiats.</p>

        <h2>L'accompagnement proposé par Atipik RH</h2>

        <p>Chez Atipik RH, nous accompagnons de nombreuses personnes dans leur projet de reconversion. Notre approche se base sur :</p>

        <ul>
          <li><strong>Un bilan de compétences approfondi</strong> pour faire le point sur votre situation et vos aspirations</li>
          <li><strong>Un accompagnement personnalisé</strong> dans la construction de votre projet professionnel</li>
          <li><strong>Des formations certifiantes</strong> (FPA, CIP) pour acquérir de nouvelles compétences</li>
          <li><strong>Un suivi dans vos démarches</strong> de recherche d'emploi ou création d'activité</li>
        </ul>

        <p>Nos consultants, eux-mêmes issus de reconversions réussies, comprennent les enjeux et les difficultés de cette démarche. Ils vous apportent à la fois l'expertise technique et le soutien humain nécessaires à votre réussite.</p>

        <hr />

        <p><em>La reconversion professionnelle est un projet qui se construit étape par étape. Avec une bonne préparation, un accompagnement adapté et de la persévérance, elle peut être l'opportunité de donner un nouveau sens à votre carrière et de vous épanouir pleinement dans votre vie professionnelle.</em></p>
      `
    },
    {
      id: 18,
      slug: "atipik-rh-espace-emploi-projets-partenariat-mem-wejob-lormont",
      title: "ATIPIK RH, un espace au service de l'emploi et de vos projets - Partenariat MEM we.job",
      excerpt: "Découvrez notre partenariat avec le programme MEM – Métier et Emploi porté par we.job. ATIPIK RH met à disposition ses locaux professionnels à Lormont pour l'accompagnement vers l'emploi, la reconversion et la réflexion professionnelle.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=800&fit=crop&q=80",
      date: "25 janvier 2026",
      readTime: "4 min",
      author: "Vanessa NOAH EWODO",
      category: "Partenariat",
      keywords: "location de salle Lormont, espace professionnel Lormont, accompagnement emploi, insertion professionnelle, partenariat we.job, MEM Métier Emploi, centre formation Lormont, salles équipées formation, ateliers professionnels, événements professionnels Bordeaux",
      content: `
        <p>Nous sommes fiers d'accueillir dans nos locaux à Lormont le programme <strong>MEM – Métier et Emploi</strong>, porté par <strong>we.job</strong>, dédié aux personnes en recherche d'emploi, en reconversion ou en réflexion professionnelle.</p>

        <h2>Un partenariat au service de l'insertion professionnelle</h2>

        <p>Ce partenariat illustre la vocation d'<strong><span style="color: #f97316;">ATIPIK RH</span></strong> : proposer un cadre professionnel, inclusif et adapté à l'accompagnement collectif et individuel. En ouvrant nos portes au programme MEM, nous renforçons notre engagement en faveur de l'insertion professionnelle et de l'accompagnement des parcours de vie.</p>

        <h3>Le programme MEM – Métier et Emploi par we.job</h3>

        <p>Le programme MEM (Métier et Emploi) est un dispositif innovant qui accompagne les personnes dans leur parcours professionnel. Que vous soyez en recherche d'emploi, en reconversion ou simplement en réflexion sur votre avenir professionnel, ce programme vous offre un accompagnement personnalisé et adapté à vos besoins.</p>

        <h2>Un espace professionnel au service de vos projets</h2>

        <p>Notre centre de formation à Lormont met également à disposition des <strong>salles équipées et modulables</strong> pour répondre à tous vos besoins professionnels :</p>

        <h3>Nos espaces disponibles</h3>

        <ul>
          <li><strong>Formations</strong> : Salles adaptées pour vos sessions de formation professionnelle, avec équipements multimédias et configuration modulable selon vos besoins pédagogiques</li>
          <li><strong>Ateliers</strong> : Espaces conviviaux pour animer des ateliers collectifs, des workshops ou des sessions de travail collaboratif</li>
          <li><strong>Réunions</strong> : Bureaux et salles de réunion équipées pour vos rendez-vous professionnels, entretiens ou réunions d'équipe</li>
          <li><strong>Dispositifs d'insertion</strong> : Locaux adaptés pour l'accueil de programmes d'insertion professionnelle, comme le programme MEM</li>
          <li><strong>Événements professionnels</strong> : Espaces modulables pour organiser vos séminaires, conférences ou événements professionnels</li>
        </ul>

        <h2>Pourquoi choisir <span style="color: #f97316;">ATIPIK RH</span> pour vos événements professionnels ?</h2>

        <h3>Localisation stratégique à Lormont</h3>

        <p>Notre centre bénéficie d'une situation privilégiée :</p>
        <ul>
          <li>À 10 minutes du centre de Bordeaux</li>
          <li>Accès facile en transport en commun (tramway ligne A)</li>
          <li>Parking gratuit disponible</li>
          <li>Proximité des principaux axes routiers</li>
        </ul>

        <h3>Équipements modernes et adaptables</h3>

        <p>Toutes nos salles sont équipées pour répondre aux exigences des professionnels :</p>
        <ul>
          <li>Vidéoprojecteurs et écrans</li>
          <li>Matériel audio-visuel</li>
          <li>Wi-Fi haut débit</li>
          <li>Mobilier modulable selon vos besoins</li>
          <li>Espaces de convivialité (cafétéria, espaces détente)</li>
        </ul>

        <h3>Un cadre professionnel et inclusif</h3>

        <p>Notre approche se base sur les valeurs d'inclusion et d'accompagnement. Que vous organisiez une formation, un atelier ou un événement professionnel, vous bénéficiez d'un environnement bienveillant et adapté à tous les publics.</p>

        <h2>Notre engagement pour l'insertion professionnelle</h2>

        <p>Ce partenariat avec le programme MEM we.job s'inscrit dans notre mission globale d'accompagnement des parcours professionnels. En accueillant ce dispositif dans nos locaux, nous contribuons à :</p>

        <ul>
          <li>Faciliter l'accès à l'emploi pour tous</li>
          <li>Accompagner les personnes en reconversion professionnelle</li>
          <li>Offrir un cadre professionnel pour la réflexion sur l'avenir professionnel</li>
          <li>Développer les partenariats locaux au service de l'insertion</li>
        </ul>

        <h2>Contactez-nous pour louer nos espaces</h2>

        <p>Vous souhaitez organiser une formation, un atelier, une réunion ou un événement professionnel dans nos locaux à Lormont ? Notre équipe est à votre disposition pour vous accompagner dans l'organisation de votre événement.</p>

        <p>Que vous soyez une entreprise, une association, un organisme de formation ou un professionnel indépendant, nous adaptons nos espaces à vos besoins spécifiques.</p>

        <hr />

        <p><strong>#LocationDeSalle #Formation #Insertion #Partenariat #AtipikRH #Lormont</strong></p>

        <p><em>Découvrez aussi nos autres services : <a href="/bilan-de-competences">bilan de compétences</a>, <a href="/vae">VAE</a>, et nos <a href="/formations">formations certifiantes</a>.</em></p>
      `
    }
  ];

  // Fonction pour parser les dates françaises
  const monthMap = {
    janvier: 0,
    fevrier: 1,
    mars: 2,
    avril: 3,
    mai: 4,
    juin: 5,
    juillet: 6,
    aout: 7,
    septembre: 8,
    octobre: 9,
    novembre: 10,
    decembre: 11
  };

  const normalizeMonth = (month) =>
    month
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split(' ');
    const monthIndex = monthMap[normalizeMonth(month)] ?? 0;
    return new Date(Number(year), monthIndex, Number(day));
  };

  // Trier les articles par date en ordre décroissant
  const sortedArticles = [...articles].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );

  const article = sortedArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <>
        <Head>
          <title>Article non trouvé | Blog Atipik RH</title>
          <meta name="description" content="L'article demandé n'existe pas ou a été déplacé." />
        </Head>
        <div className="min-h-screen bg-white">
          <Header isFixed={true} />
          <div className="h-20"></div>
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Article non trouvé</h1>
            <Link href="/blog" className="text-orange-500 hover:text-orange-600">
              Retour au blog
            </Link>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  // Fonction pour convertir la date française en format ISO
  const convertFrenchDateToISO = (frenchDate) => {
    const monthMap = {
      'janvier': '01', 'février': '02', 'mars': '03', 'avril': '04',
      'mai': '05', 'juin': '06', 'juillet': '07', 'août': '08',
      'septembre': '09', 'octobre': '10', 'novembre': '11', 'décembre': '12'
    };
    
    const parts = frenchDate.split(' ');
    if (parts.length === 3) {
      const day = parts[0].padStart(2, '0');
      const month = monthMap[parts[1]];
      const year = parts[2];
      
      if (month) {
        return `${year}-${month}-${day}T00:00:00.000Z`;
      }
    }
    
    // Fallback si le parsing échoue
    return new Date().toISOString();
  };

  // Schema.org pour le SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": `https://atipikrh.fr${article.image}`,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Atipik RH",
      "logo": {
        "@type": "ImageObject",
        "url": "https://atipikrh.fr/images/logos/atipik-logo.png"
      }
    },
    "datePublished": convertFrenchDateToISO(article.date),
    "dateModified": convertFrenchDateToISO(article.date),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://atipikrh.fr/blog/${article.slug}`
    }
  };

  return (
    <>
      <Head>
        <title>{article.title} | Blog Atipik RH</title>
        <meta name="description" content={article.excerpt} />
        <meta name="keywords" content={article.keywords} />
        <link rel="canonical" href={`https://atipikrh.fr/blog/${article.slug}`} />
        
        {/* Open Graph pour les réseaux sociaux */}
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={`https://atipikrh.fr${article.image}`} />
        <meta property="og:url" content={`https://atipikrh.fr/blog/${article.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Atipik RH" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.excerpt} />
        <meta name="twitter:image" content={`https://atipikrh.fr${article.image}`} />
        
        {/* Schema.org JSON-LD */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Header isFixed={true} />

        {/* Spacer for fixed header */}
        <div className="h-20"></div>

        {/* Navigation */}
        <div className="container mx-auto px-4 py-6">
          <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-[#013F63] transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour au blog
          </Link>
        </div>

        {/* Article */}
        <article className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Header de l'article */}
              <header className="mb-12">
                <div className="mb-6">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
                
                <h1 
                  className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-6 leading-tight"
                  dangerouslySetInnerHTML={{
                    __html: article.slug === "atipik-rh-espace-emploi-projets-partenariat-mem-wejob-lormont"
                      ? article.title
                          .replace(/ATIPIK RH/g, '<span style="color: #f97316;">ATIPIK RH</span>')
                          .replace(/Partenariat MEM we\.job/g, '<span style="color: #f97316;">Partenariat MEM we.job</span>')
                      : article.title
                  }}
                />
                
                {/* Métadonnées */}
                <div className="flex items-center gap-6 text-gray-500 mb-8">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                {/* Image principale */}
                <div className="relative h-64 lg:h-96 rounded-3xl overflow-hidden mb-8">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </header>

              {/* Contenu de l'article */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Call to action */}
              <div className="mt-16 bg-gradient-to-br from-orange-50 to-accent-100 rounded-3xl p-8 text-center">
                <h3 className="text-2xl font-bold text-[#013F63] mb-4">
                  Intéressé par nos services ?
                </h3>
                <p className="text-gray-600 mb-6">
                  Notre équipe d'experts vous accompagne dans votre projet professionnel
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="inline-flex px-6 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition hover:scale-105"
                  >
                    Nous contacter
                  </Link>
                  <Link 
                    href="/bilan-de-competences" 
                    className="inline-flex px-6 py-3 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
} 