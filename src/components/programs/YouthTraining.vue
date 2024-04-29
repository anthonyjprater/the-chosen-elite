<script setup>
import { ref } from 'vue';
// import MainHero from '../components/heros/MainHero.vue'
import HeroHeader from '../headers/HeroHeader.vue'
import TrainingOverview from '../programs/TrainingOverview.vue'
import TrainingCoach from '../programs/TrainingCoach.vue';
import TrainingDetails from '../programs/TrainingDetails.vue'
import SignUpButton from '../buttons/SignUpButton.vue';

const image = ref("url('/placeholder-bg.jpg')")

const items = ref([
    { title: 'Train Your Mind and Body for Basketball Success' },
    { title: 'Training Programs', description: 'Description 2' },
    { title: 'About Us', description: 'Description 3' }
    ]);

const programOverviews = ref([
    { id: 1,
      heading: 'Training for Children' ,
      text1: "A children's training session at Chosen Elite Academy is a fun and intensive experience that develops children's physical and technincal skills in basketball. The training is conducted by qualified coaches who help children understand and enjoy the game.",
      text2: "During the training, children learn the basics of basketball, such as ball control, passing, shooting, and defense. They are trained in small groups, which allow each child to recieve individual attention from the coaches. During the training process, children learn to work as a team, develop coordination and flexibility, and also improve their physical fitness." ,
      text3: "One of the key aspects of the training is creating a friendly atmosphere where each child feels confident and an important member of the team. Children recieve praise and support from coaches and other participants, which helps them to improve their self-esteem and confidence." ,
      text4: "At the end of each training session, children play games where they can show their new skills and learn to work as a team. Training at Chosen Elite Academy is an excellent way for children to develop, enjoy the game, and learn to collaborate with others."
    },
    { id: 2,
      heading: 'Training for Amateurs' ,
      text1: "The program develops pre-teen and teenage players' intermediate to advanced physical and technical skills in basketball. The training is conducted by experienced coaches who help players refine their skills and deepen their understanding of the game.",
      text2: "During the training, players work on advanced techniques such as ball-handling, footwork, shooting mechanics, offensive moves, and defensive strategies. They train in position-specific groups, allowing coaches to provide specialized instruction tailored to each player's role on the court. The training process emphasizes skills development, tactical awareness, and physical conditioning to prepare players for competitive gameplay.",
      text3: "One of the key aspects of the training is fostering a competitive yet supportive environment where players are challenged to push their limits while maintaining a team-first mentality. Coaches provide constructive feedback and motivate players to improve their mental toughness and decision-making on the court.",
      text4: "At the end of each training session, players participate in situational drills and scrimmages, where they can apply their newly learned skills and strategies in game-like scenarios. The program at the Elite Youth Basketball Academy is designed to help players reach their full potential, develop a passion for the game, and prepare them for the next level of competition."
    },
    { id: 3,
      heading: 'Training for Professionals' ,
      text1: "A children's training session at Chosen Elite Academy is a fun and intensive experience that develops children's physical and technincal skills in basketball. The training is conducted by qualified coaches who help children understand and enjoy the game.",
      text2: "During the training, children learn the basics of basketball, such as ball control, passing, shooting, and defense. They are trained in small groups, which allow each child to recieve individual attention from the coaches. During the training process, children learn to work as a team, develop coordination and flexibility, and also improve their physical fitness." ,
      text3: "One of the key aspects of the training is creating a friendly atmosphere where each child feels confident and an important member of the team. Children recieve praise and support from coaches and other participants, which helps them to improve their self-esteem and confidence." ,
      text4: "At the end of each training session, children play games where they can show their new skills and learn to work as a team. Training at Chosen Elite Academy is an excellent way for children to develop, enjoy the game, and learn to collaborate with others."
    },
])

const coachSummary = ref([
    { id: 1,
      heading: "Children's Coach - Tim Prater" ,
      summary: "Tim Prater is a passionate and seasoned basketball coach with over two decades of experience shaping young athletes into champions. His coaching journey began on the hardwood of local high schools, where he honed his skills and developed a deep love for the game. Known for his strategic brilliance and motivational prowess, Coach Tim has led several teams to victory in regional championships. His commitment to player development, teamwork, and sportsmanship makes him a respected figure in the basketball community, inspiring the next generation of hoop dreams.",
      info: [
        { content: "Founder Chosen Elite Academy, trainer"},
        { content: "Head Coach Team Chosen Elite"},
        { content: "Cascade Middle School Boys Basketball Head Coach"},
      ]
    },
    { id: 2,
      heading: "Amateur - Coach Roberts" ,
      summary: "Coach Roberts is a highly respected and accomplished basketball coach with over two decades of experience coaching at the youth and high school levels. Her coaching philosophy revolves around developing well-rounded players who excel both on and off the court. Known for her intense yet nurturing coaching style, Coach Roberts has led numerous teams to championship titles and has helped countless players earn college scholarships. Her commitment to player development, attention to detail, and emphasis on character-building have made her a sought-after mentor in the basketball community.",
      info: [
        { content: "Head Coach at Elite Youth Basketball Academy"},
        { content: "Former Head Coach at Westlake High School (State Champions 2019, 2021)"},
        { content: "Certified USA Basketball Coach Instructor"},
      ]
    },
    { id: 1,
      heading: "Children's Coach - God Shammgod" ,
      summary: "John Smith is a passionate and seasoned basketball coach with over two decades of experience shaping young athletes into champions. His coaching journey began on the hardwood of local high schools, where he honed his skills and developed a deep love for the game. Known for his strategic brilliance and motivational prowess, John has led several teams to victory in regional championships. His commitment to player development, teamwork, and sportsmanship makes him a respected figure in the basketball community, inspiring the next generation of hoop dreams.",
      info: [
        { content: "Founder Chosen Elite Academy, trainer"},
        { content: "Head Coach Team Chosen Elite"},
        { content: "Cascade Middle School Boys Basketball Head Coach"},
      ]
    }
])

const programDetails = ref([
    { id: 1,
      heading: 'Training Program' ,
      drills: [
        { title: 'Warm-up',
          content: "The training begins with a warm-up to prepare the child's body for physical activity. The warm-up includes stretching exercises, muscle warm-up, and light cardio training."
        },
        { title: 'Shooting Technique',
          content: "The second step is teaching shooting techniques, including free throws layups, and jump-shots. Children learn proper stance, shooting form, ball trajectory, and develop accuract in scoring."
        },
        { title: 'Passing',
          content: "The next stage focuses on teaching passing techniques. Children learn how to pass the ball to each other using various methods, including cross-court passes, outlet passes, and bounce passes. Coaches help children learn proper passing techniques and develop a sense of timing."
        },
        { title: 'Defense',
          content: "Learning defensive skills is an important part of the training program. Children learn proper positioning, ball interception, and blocking opponents shots. Coaches also teach children how to move on the court and switch between offense and defense."
        },
        { title: 'Game Practice',
          content: "At the end of the training session, children have the opportunity to play games to showcase their new skills and techniques. Coaches monitor the gameplay and provide inidiviual feedback to help each child improve their skills. Game practice also helps children develop teamwork and learn to play as a cohesive unit."
        }
      ]
    },
    { id: 2,
      heading: 'Training Program' ,
      drills: { 
        title: 'Warm-up',
        text1: "The training begins with a warm-up to prepare the child's body for physical activity. The warm-up includes stretching exercises, muscle warm-up, and light cardio training.",
        text2: "During the training, children learn the basics of basketball, such as ball control, passing, shooting, and defense. They are trained in small groups, which allow each child to recieve individual attention from the coaches. During the training process, children learn to work as a team, develop coordination and flexibility, and also improve their physical fitness." ,
        text3: "One of the key aspects of the training is creating a friendly atmosphere where each child feels confident and an important member of the team. Children recieve praise and support from coaches and other participants, which helps them to improve their self-esteem and confidence." ,
        text4: "At the end of each training session, children play games where they can show their new skills and learn to work as a team. Training at Chosen Elite Academy is an excellent way for children to develop, enjoy the game, and learn to collaborate with others."
      }
    },
    { id: 3,
      heading: 'Training Program' ,
      drills: { 
        title: 'Warm-up',
        text1: "The training begins with a warm-up to prepare the child's body for physical activity. The warm-up includes stretching exercises, muscle warm-up, and light cardio training.",
        text2: "During the training, children learn the basics of basketball, such as ball control, passing, shooting, and defense. They are trained in small groups, which allow each child to recieve individual attention from the coaches. During the training process, children learn to work as a team, develop coordination and flexibility, and also improve their physical fitness." ,
        text3: "One of the key aspects of the training is creating a friendly atmosphere where each child feels confident and an important member of the team. Children recieve praise and support from coaches and other participants, which helps them to improve their self-esteem and confidence." ,
        text4: "At the end of each training session, children play games where they can show their new skills and learn to work as a team. Training at Chosen Elite Academy is an excellent way for children to develop, enjoy the game, and learn to collaborate with others."
      }
    },

])

</script>

<template>
    <HeroHeader :item = "items[1]" :backGroundImage="image" showButton="true" />
    <section>
      <TrainingOverview :overview = "programOverviews[0]" />
      <TrainingCoach :summary = "coachSummary[0]" />
      <TrainingDetails :details="programDetails[0]" />
      <signUpButton />
    </section>
</template>

<style scoped>

section {
    background: rgba(47, 47, 47, 1);
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: center;
    width: 100vw;
    padding: 3rem 1.5rem;
    gap: 1.5rem;
    background: linear-gradient(0deg, rgba(47,47,47,.7), rgba(0,0,0,1));
    text-align: left;
}

h2.hero-headline {
  font-size: 1.25rem;
  color: var(--white);
  width: max(30%,200px);
  text-wrap: balance;
  line-height: 1.3;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7);
  z-index: 2;
}

@media (min-width: 768px) {
  section {
    padding: 3rem 7.5rem;
  }
}

</style>
