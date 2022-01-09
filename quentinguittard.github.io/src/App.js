//Import general
import { useState, useEffect } from 'react';

//Import components
import Presidents from './components/Presidents';

//Styles
import './styles/app.scss';

//Slider
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

//Images
import Bonaparte from './img/bonaparte.jpeg';
import Thiers from './img/thiers.jpeg';
import MacMahon from './img/macmahon.jpeg';
import Grevy from './img/grevy.jpeg';
import Carnot from './img/carnot.jpeg';
import CasimirPerier from './img/casimirperier.jpeg';
import Faure from './img/faure.jpeg';
import Loubet from './img/loubet.jpeg';
import Fallieres from './img/fallieres.jpeg';
import Poincare from './img/poincare.jpeg';
import Deschanel from './img/deschanel.jpeg';
import Millerand from './img/millerand.jpeg';
import Doumergue from './img/doumergue.jpeg';
import Doumer from './img/doumer.jpeg';
import Lebrun from './img/lebrun.jpeg';
import Auriol from './img/auriol.jpeg';
import Coty from './img/coty.jpeg';
import DeGaulle from './img/degaulle.jpeg';
import Pompidou from './img/pompidou.jpeg';
import Giscard from './img/giscard.jpeg';
import Mitterrand from './img/mitterrand.jpeg';
import Chirac from './img/chirac.jpeg';
import Sarkozy from './img/sarkozy.jpeg';
import Hollande from './img/hollande.jpeg';
import Macron from './img/macron.jpeg';

import Logo from './img/logo.svg';

//Presidents Data
const allPresidents = [
  {
    'id': 1,
    'name': 'Louis-Napoléon Bonaparte',
    'start': 1848,
    'end': 1851,
    'description': "Charles Louis Napoléon Bonaparte, dit Louis-Napoléon Bonaparte, né le 20 avril 1808 à Paris et mort le 9 janvier 1873 à Chislehurst (Royaume-Uni), est un monarque et un homme d'État français. Il est à la fois l'unique président de la Deuxième République, le premier chef d'État français élu au suffrage universel masculin, le 10 décembre 1848, le premier président de la République française, et, après la proclamation de l'Empire le 2 décembre 1852, le dernier monarque du pays sous le nom de Napoléon III, empereur des Français.",
    'link': "https://fr.wikipedia.org/wiki/Napol%C3%A9on_III",
    'image': Bonaparte
  },
  {
    'id': 2,
    'name': 'Adolphe Thiers',
    'start': 1871,
    'end': 1873,
    'description': "Adolphe Thiers, né le 15 avril 1797 (26 germinal an V) à Marseille et mort le 3 septembre 1877 à Saint-Germain-en-Laye, est un avocat, journaliste, historien et homme d'État français.",
    'link': "https://fr.wikipedia.org/wiki/Adolphe_Thiers",
    'image': Thiers
  },
  {
    'id': 3,
    'name': 'Patrice de Mac Mahon',
    'start': 1873,
    'end': 1879,
    'description': "Patrice de Mac Mahon, comte de Mac Mahon, 1er duc de Magenta, né le 13 juin 1808 au château de Sully (Saône-et-Loire) et mort le 17 octobre 1893 à Montcresson (Loiret), est un militaire et homme d’État français, président de la République de 1873 à 1879.",
    'link': "https://fr.wikipedia.org/wiki/Patrice_de_Mac_Mahon",
    'image': MacMahon
  },
  {
    'id': 4,
    'name': 'Jules Grévy',
    'start': 1879,
    'end': 1887,
    'description': "Jules Grévy, né le 15 août 1807 à Mont-sous-Vaudrey (Jura) et mort le 9 septembre 1891 dans la même commune, est un avocat et homme d'État français, président de la République française du 30 janvier 1879 au 2 décembre 1887.",
    'link': "https://fr.wikipedia.org/wiki/Jules_Gr%C3%A9vy",
    'image': Grevy
  },
  {
    'id': 5,
    'name': 'Sadi Carnot',
    'start': 1887,
    'end': 1894,
    'description': "Marie François Sadi Carnot, plus souvent appelé Sadi Carnot, est un homme d'État français, né le 11 août 1837 à Limoges (Haute-Vienne) et assassiné le 25 juin 1894 à Lyon (Rhône). Il est président de la République du 3 décembre 1887 à sa mort.",
    'link': "https://fr.wikipedia.org/wiki/Sadi_Carnot_(homme_d%27%C3%89tat)",
    'image': Carnot
  },
  {
    'id': 6,
    'name': 'Jean Casimir-Perier',
    'start': 1894,
    'end': 1895,
    'description': "Jean Casimir-Perier, né le 8 novembre 1847 à Paris et mort le 11 mars 1907 dans la même ville, est un homme d'État français. Il est président de la République française du 27 juin 1894 au 16 janvier 1895.",
    'link': "https://fr.wikipedia.org/wiki/Jean_Casimir-Perier",
    'image': CasimirPerier
  },
  {
    'id': 7,
    'name': 'Félix Faure',
    'start': 1895,
    'end': 1899,
    'description': "Félix Faure, né le 30 janvier 1841 à Paris et mort le 16 février 1899 dans la même ville, est un homme d'État français. Il est président de la République du 17 janvier 1895 à sa mort.",
    'link': "https://fr.wikipedia.org/wiki/F%C3%A9lix_Faure",
    'image': Faure
  },
  {
    'id': 8,
    'name': 'Émile Loubet',
    'start': 1899,
    'end': 1906,
    'description': "Émile Loubet, né le 30 décembre 1838 à Marsanne (Drôme) et mort le 20 décembre 1929 à Montélimar (Drôme), est un homme d'État français. Il est président de la République française du 18 février 1899 au 18 février 1906.",
    'link': "https://fr.wikipedia.org/wiki/%C3%89mile_Loubet",
    'image': Loubet
  },
  {
    'id': 9,
    'name': 'Armand Fallières',
    'start': 1906,
    'end': 1913,
    'description': "Armand Fallières, né le 6 novembre 1841 à Mézin (Lot-et-Garonne) et mort le 22 juin 1931 à Villeneuve-de-Mézin (Lot-et-Garonne), est un homme d'État français, président de la République française de 1906 à 1913.",
    'link': "https://fr.wikipedia.org/wiki/Armand_Falli%C3%A8res",
    'image': Fallieres
  },
  {
    'id': 10,
    'name': 'Raymond Poincaré',
    'start': 1913,
    'end': 1920,
    'description': "Raymond Poincaré, né le 20 août 1860 à Bar-le-Duc (Meuse) et mort le 15 octobre 1934 à Paris, est un avocat et homme d'État français. Il est le président de la République française du 18 février 1913 au 18 février 1920.",
    'link': "https://fr.wikipedia.org/wiki/Raymond_Poincar%C3%A9",
    'image': Poincare
  },
  {
    'id': 11,
    'name': 'Paul Deschanel',
    'start': 1920,
    'end': 1920,
    'description': "Paul Deschanel, né le 13 février 1855 à Schaerbeek (Belgique) et mort le 28 avril 1922 à Paris (France), est un homme d'État, journaliste et écrivain français, président de la République du 18 février au 21 septembre 1920.",
    'link': "https://fr.wikipedia.org/wiki/Paul_Deschanel",
    'image': Deschanel
  },
  {
    'id': 12,
    'name': 'Alexandre Millerand',
    'start': 1920,
    'end': 1924,
    'description': "Alexandre Millerand, né le 10 février 1859 à Paris et mort le 6 avril 1943 à Versailles, est un homme d'État français. Il est président du Conseil du 20 janvier au 23 septembre 1920, puis président de la République du 23 septembre 1920 au 11 juin 1924.",
    'link': "https://fr.wikipedia.org/wiki/Alexandre_Millerand",
    'image': Millerand
  },
  {
    'id': 13,
    'name': 'Gaston Doumergue',
    'start': 1924,
    'end': 1931,
    'description': "Gaston Doumergue, né le 1er août 1863 à Aigues-Vives (Gard) et mort le 18 juin 1937 dans la même ville, est un homme d'État français. Il est président de la République française du 13 juin 1924 au 13 juin 1931.",
    'link': "https://fr.wikipedia.org/wiki/Gaston_Doumergue",
    'image': Doumergue
  },
  {
    'id': 14,
    'name': 'Paul Doumer',
    'start': 1931,
    'end': 1932,
    'description': "Joseph Athanase Doumer, dit Paul Doumer, né le 22 mars 1857 à Aurillac (Cantal) et assassiné le 7 mai 1932 à Paris, est un homme d'État français. Il est président de la République du 13 juin 1931 à sa mort.",
    'link': "https://fr.wikipedia.org/wiki/Paul_Doumer",
    'image': Doumer
  },
  {
    'id': 15,
    'name': 'Albert Lebrun',
    'start': 1932,
    'end': 1940,
    'description': "Albert Lebrun, né le 29 août 1871 à Mercy-le-Haut (alors en Moselle) et mort le 6 mars 1950 à Paris (alors dans le département de la Seine), est un homme d'État français. Il est président de la République française du 10 mai 1932 au 11 juillet 1940.",
    'link': "https://fr.wikipedia.org/wiki/Albert_Lebrun",
    'image': Lebrun
  },
  {
    'id': 16,
    'name': 'Vincent Auriol',
    'start': 1947,
    'end': 1954,
    'description': "Vincent Auriol, né le 27 août 1884 à Revel (Haute-Garonne) et mort le 1er janvier 1966 à Paris, est un homme d'État français. Il est président de la République du 16 janvier 1947 au 16 janvier 1954.",
    'link': "https://fr.wikipedia.org/wiki/Vincent_Auriol",
    'image': Auriol
  },
  {
    'id': 17,
    'name': 'René Coty',
    'start': 1954,
    'end': 1959,
    'description': "René Coty, né le 20 mars 1882 au Havre et mort le 22 novembre 1962 dans la même ville, est un homme d'État français. Il est président de la République du 16 janvier 1954 au 8 janvier 1959.",
    'link': "https://fr.wikipedia.org/wiki/Ren%C3%A9_Coty",
    'image': Coty
  },
  {
    'id': 18,
    'name': 'Charles de Gaulle',
    'start': 1959,
    'end': 1969,
    'description': "Charles de Gaulle, communément appelé le général de Gaulle ou parfois simplement le Général, né le 22 novembre 1890 à Lille et mort le 9 novembre 1970 à Colombey-les-Deux-Églises, est un militaire, résistant, homme d'État et écrivain français.",
    'link': "https://fr.wikipedia.org/wiki/Charles_de_Gaulle",
    'image': DeGaulle
  },
  {
    'id': 19,
    'name': 'Georges Pompidou',
    'start': 1969,
    'end': 1974,
    'description': "Georges Pompidou, né le 5 juillet 1911 à Montboudif (Cantal) et mort le 2 avril 1974 à Paris, est un haut fonctionnaire et homme d'État français. Il est Premier ministre du 14 avril 1962 au 10 juillet 1968 et président de la République du 20 juin 1969 à sa mort.",
    'link': "https://fr.wikipedia.org/wiki/Georges_Pompidou",
    'image': Pompidou
  },
  {
    'id': 20,
    'name': "Valéry Giscard d'Estaing",
    'start': 1974,
    'end': 1981,
    'description': "Valéry Giscard d'Estaing, communément appelé « Giscard » ou désigné par ses initiales, « VGE », né le 2 février 1926 à Coblence (Allemagne) et mort le 2 décembre 2020 à Authon (France), est un homme d'État français, président de la République de 1974 à 1981.",
    'link': "https://fr.wikipedia.org/wiki/Val%C3%A9ry_Giscard_d%27Estaing",
    'image': Giscard
  },
  {
    'id': 21,
    'name': 'François Mitterrand',
    'start': 1981,
    'end': 1995,
    'description': "François Mitterrand, né le 26 octobre 1916 à Jarnac (Charente) et mort le 8 janvier 1996 à Paris, est un homme d'État français, président de la République du 21 mai 1981 au 17 mai 1995.",
    'link': "https://fr.wikipedia.org/wiki/Fran%C3%A7ois_Mitterrand",
    'image': Mitterrand
  },
  {
    'id': 22,
    'name': 'Jacques Chirac',
    'start': 1995,
    'end': 2007,
    'description': "Jacques Chirac, né le 29 novembre 1932 à Paris et mort le 26 septembre 2019 dans la même ville, est un haut fonctionnaire et homme d'État français. Il est Premier ministre de 1974 à 1976 puis de 1986 à 1988 et président de la République de 1995 à 2007.",
    'link': "https://fr.wikipedia.org/wiki/Jacques_Chirac",
    'image': Chirac
  },
  {
    'id': 23,
    'name': 'Nicolas Sarkozy',
    'start': 2007,
    'end': 2012,
    'description': "Nicolas Sarközy de Nagy-Bocsae, dit Nicolas Sarkozy, né le 28 janvier 1955 à Paris, est un homme d'État français. Il est président de la République française du 16 mai 2007 au 15 mai 2012.",
    'link': "https://fr.wikipedia.org/wiki/Nicolas_Sarkozy",
    'image': Sarkozy
  },
  {
    'id': 24,
    'name': 'François Hollande',
    'start': 2012,
    'end': 2017,
    'description': "François Hollande, né le 12 août 1954 à Rouen, est un haut fonctionnaire et homme d'État français. Il est président de la République française du 15 mai 2012 au 14 mai 2017.",
    'link': "https://fr.wikipedia.org/wiki/Fran%C3%A7ois_Hollande",
    'image': Hollande
  },
  {
    'id': 25,
    'name': 'Emmanuel Macron',
    'start': 2017,
    'end': 2022,
    'description': "Emmanuel Macron, né le 21 décembre 1977 à Amiens (France), est un haut fonctionnaire, banquier d'affaires et homme d'État français. Il est président de la République française depuis le 14 mai 2017.",
    'link': "https://fr.wikipedia.org/wiki/Emmanuel_Macron",
    'image': Macron
  },
];

const marks = [
  {
    value: 1848,
    label: '1848',
  },
  {
    value: 1900,
    label: '1900',
  },
  {
    value: 1950,
    label: '1950',
  },
  {
    value: 2000,
    label: '2000',
  },
  {
    value: 2022,
    label: '2022',
  }
];

const PrettoSlider = styled(Slider)({
  color: '#415aa8',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#ed1c24',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});


function App() {

  const [selectedPresidents, setSelectedPresidents] = useState([]);

  const handleSliderChange = (event, value) => {
    setSelectedPresidents(allPresidents.filter(element => {
      return value >= element.start && value <= element.end
    }))
  }

  useEffect(() => {
    handleSliderChange('', 1935);
  }, [])

  return (
    <div className="App">
      <header>
        <img src={Logo} alt="logo" />
      </header>
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={1935} marks={marks} min={1848} max={2022} onChange={handleSliderChange} onChangeCommitted={handleSliderChange} />
      <Presidents selectedPresidents={selectedPresidents} />
    </div>
  );
}

export default App;
