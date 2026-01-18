const about_content =
  {
    //src: 'https://oca-wp-journals.s3.eu-west-2.amazonaws.com/wp-content/uploads/sites/7050/2025/05/Picsart_25-05-16_12-48-02-0662.jpg',
    src:'https://imagedelivery.net/IQZYF0rfxQS1PTCeW-A-Gg/d703f38f-01ad-4310-6913-e1df497ca000/public',
    caption: "A Map of Lineage: A Memory, an Echo, a Fragment",
    description: '<p>This project began as a film. It was meant to trace the story of Achiamma, my Sri Lankan grandmother, \
      whom I met only once when I was two years old. But as I developed the film, I realised the story resists clarity. My \
      connection to Achiamma is not linear, not whole. It is scattered, imagined, interrupted by silence and diaspora, \
      by time and distance, and now, by my own hearing loss. </p> \
      <p>What emerged instead is a visual map. A cartography of a fragmented inheritance. Here, scenes become sketches. \
      Sounds become descriptions. The resulting gaps are not filled, they are rendered visible. This project embraces \
      incompleteness, not as failure, but as an honest expression of longing and dislocation.</p> \
      <p>The work draws on sensory fragments: video textures, written descriptions, sonic impressions \
      composed and recorded in shifting states of remembering, seeing and hearing. Performance becomes a method of \
      entering memory through \
      the body, tentative, porous, uncertain. Some gestures are rehearsed while others dissolve before they arrive. Parts \
      of the map are coded generatively, allowing memory to reconfigure itself with each view. The limitations of \
      my hearing, its fragility, its distortion, became collaborators in the process. They shaped the tone, the tempo, the form.</p> \
      <p>Viewers are invited to navigate the map freely. It offers a non-linear \
      open structure: one that allows for drift, repetition, interruption, and return.</p>\
      <p>This is a work born out of intimacy and distance. At times, it moves like fog, soft, diffuse, barely there. \
      At others, it roots itself in the body, pulsing with grief or tenderness. Rather than build a finished narrative, \
      I offer a terrain. You are invited to walk it, feel the edges, sense the lines. This is not a tribute. \
      It is an attempt to touch something that has always been partially out of reach.</p>'
  };

  const about_leah =
    {
          description: '<p><strong>Leah Muriel Bowie</strong> is a Swiss–Sri Lankan interdisciplinary artist based in Switzerland and in London.</p>\
            <p>Leah\'s work moves fluidly across languages, cultures, and disciplines, merging technology, sustainability, \
            cultural studies, and social theory into multidimensional works of art.</p>\
            <p>Rooted in a diasporic, post-interdisciplinary, and post-colonial perspective, their practice engages with \
            trauma-informed methodologies and alternative epistemologies, centering ways of knowing that are embodied, relational, \
            non-linear, and often silenced.</p>\
            <p>This piece explores internal multiplicity, layered voices, fragmentary time, and shifting states of \
            presence, offering insight into how identity is lived rather than fixed. Through language play, performative gesture, \
            material investigation, and self-composed or improvised music, they construct poethic systems that interweave with \
            and disrupt dominant narratives.</p>\
            <p>Their process is shaped by a deep engagement with memory as a living medium, assembled through absence, re-enactment, \
            and relational mapping. Participatory in spirit, their work invites audiences into shared spaces of witnessing and \
            quiet disruption, privileging presence over performance.</p>\
            <p>At its heart, Leah’s practice explores communication, identity, and connection, across digital and physical spaces, \
            and in the unspoken architectures of care, resistance, and survival. Their work asks not for certainty, but for \
            companionship in complexity, for stories that resist coherence, but still deserve to be told.</p>'
    };

document.getElementById('about-link').addEventListener('click', (e) => {
  e.preventDefault();
  const lightbox = document.getElementById('custom-lightbox');
  const mediaContainer = document.getElementById('lightbox-media');
  const captionContainer = document.getElementById('lightbox-caption');
  const descriptionContainer = document.getElementById('lightbox-description');
  let mediaElement;
  let currentMedia = null;
  // Clear any dynamic content
  mediaContainer.innerHTML = '';
  mediaElement = document.createElement('img');
  mediaElement.src = about_content.src;
  mediaContainer.appendChild(mediaElement);
  captionContainer.innerHTML = about_content.caption;
  descriptionContainer.innerHTML = about_content.description;
  lightbox.style.display = 'flex';         // Show lightbox
});

document.getElementById('about-leah').addEventListener('click', (e) => {
  e.preventDefault();
  const lightbox = document.getElementById('custom-lightbox');
  const captionContainer = document.getElementById('lightbox-caption');
  const descriptionContainer = document.getElementById('lightbox-description');
  descriptionContainer.innerHTML = about_leah.description;
  lightbox.style.display = 'flex';         // Show lightbox
});



const media = [
  {
      type: "image",
      //src: "https://oca-wp-journals.s3.eu-west-2.amazonaws.com/wp-content/uploads/sites/6017/2025/01/PICT0130-scaled.jpg",
      src: "https://imagedelivery.net/IQZYF0rfxQS1PTCeW-A-Gg/98e6f11f-a1b9-4d7e-2d23-e4a17563e700/public",
      caption: "1982: Me and Achiamma",
      description: `<p>This is the only known picture of Achiamma and me. I was two years old. We are sitting on
      the veranda of her home in Sri Lanka. I don’t remember this moment, not the texture of her sari, the smell of the morning,
      the strength of her hands. </p> 
      <p>But the image remains.</p>
      <p>Her expression is calm, maybe watchful. Mine is in motion, already blurring into elsewhere. This photograph has
      become more than memory; it is a placeholder for everything I never got to know. It holds a relationship that existed
      mostly in fragments, a single meeting, in stories not passed down, in the silence that followed.</p>
      <p>Time has tinted the image yellow. A colour of age, of distance, of fading. But in that fading, something lingers.
      A trace of presence. A root.</p>`
  },
  {
      type: "image",
      //src: "  https://oca-wp-journals.s3.eu-west-2.amazonaws.com/wp-content/uploads/sites/7050/2025/05/Picsart_25-05-15_20-39-06-0274.jpg",
      src: "https://imagedelivery.net/IQZYF0rfxQS1PTCeW-A-Gg/013e4bca-5907-4beb-8e82-0a1cd2e0fc00/public",
      caption: "Glossary for a Language Never Learned",
      description: '<p>identity (noun)<br/>\
          1. a skin to slide into before breakfast<br/>\
          2. something others assign upon first sight</p>\
          <p>culture (noun)<br/>\
          inherited, re-jected, re-invented</p>\
          <p>time (noun)<br/>\
          1. an unmapped resource that unfolds into infinite dimensions<br/>\
          2. experience, loop, re-visit, re-experience, re-imagine, re-invent </p>\
          <p>translation (noun)<br/>\
          what gets dropped between time, tongues, and sounds</p>\
          <p>language (noun)<br/>\
          a tool, a prison, a bridge</p>\
          <p>home (noun)<br/>\
          a wish, folded small</p>\
          <p>roots (noun/plural)<br/>\
          more real in dreams than in documents</p>'
  },
  {
      type: "image",
      //src: "https://oca-wp-journals.s3.eu-west-2.amazonaws.com/wp-content/uploads/sites/7050/2025/05/Picsart_25-05-05_15-20-31-651.jpg",
      src: "https://imagedelivery.net/IQZYF0rfxQS1PTCeW-A-Gg/39931c29-fcbc-4820-d380-fea02299ba00/public",
      caption: "Dialogue",
      description: '<p>என் பெயர்...<br/>\
          Wer bist du?<br/>\
          Elle a cueilli du thé. <br/>\
          Moi, je cueille les restes.<br/>\
          ඔවුන් මට නමක් දුන්නා. මට මගේ එක නැහැ.<br/>\
          Ich bin...<br/>\
          Je suis...<br/>\
          Ich passe nicht in einen Satz.<br/>\
          මම මෙහි පදිංචි වූයේ... <br/>\
          நான் எங்கே இருக்கிறேன்?</p>\
          <p><i>This isn’t translation. It’s dialogue with words dissolving into sounds without meaning.</i></p>'
  },

  {
      type: "video",
      embed: true,
      //src: "https://d2hpwsdp0ihr0w.cloudfront.net/sessions/ae6d773f-fd9f-4ee6-ac0d-b2fd00ee47e6/720c6ed4-e3fa-4384-99a9-b2fd00ee47ef-ac9c4d27-88c3-4e8c-ade4-b2fe01045f29.mp4",
      src: "https://customer-aygqk36gwfkjjx2a.cloudflarestream.com/fbcbf43de4c0ca1605959a93df8d37b3/iframe",
      caption: "Achiamma Film: Scene 1 - A Blank Canvas",
      description: '<p>The first scene of Achiamma begins with a canvas and the act of painting. I stand \
      before it, brush in hand, not to capture a likeness, but to trace a memory I never owned, only inherited.</p>\
      <p>What unfolds is not a portrait, but an invocation. A flicker of film, the scent of roasting curry powder, \
      the ache of a name unspoken. Thirty-nine years after her death, I search for her. Not in photographs or family \
      stories. I search for what was lost, for what is missing. In the hush, in the in-between. </p>\
      <p>The land my soul calls home is not just terrain, it is wound and wonder: the hill country of Sri Lanka with its\
      tea estates is where my bloodline twists: a planter and a tea picker getting married, a coloniser and a colonised, \
      my DNA holding both. \
      My grandfather’s beagles roam celluloid forests. My grandmother’s hands, swift and weathered, remain unseen. Her \
      labour filled the empire’s porcelain cups, but history left her without a name. </p> \
      <p>This opening act is a reckoning, through pigment, breath, and silence. A ritual return to the plantation’s shadows, \
      to the tangled rootwork of inheritance. Speaking of love, violence, longing, and lineage in one gesture. A home far \
      away from home. A past that refuses to rest.</p>'
  },

  {
      type: "video",
      embed: true, 
      //src: "https://d2hpwsdp0ihr0w.cloudfront.net/sessions/583afc8b-eefc-4e67-9efc-b2fd00f0ea8d/62af4fd5-f246-4523-b8a7-b2fd00f0ea96-440efa88-c35b-4946-b44c-b2fe0104b724.mp4",
      src: "https://customer-aygqk36gwfkjjx2a.cloudflarestream.com/6baefdcf421d5d832ba5455a6608ef6d/iframe",
      caption: "Achiamma Film Scene 2 - Re-Creation",
      description: '<p>The second scene of Achiamma unfolds in a blur of focus, of memory, of recognition delayed. I am painting \
      again, but doubt begins to seep through the bristles.</p>\
      <p>There is a face on the canvas I no longer trust.</p>\
      <p>Achiamma\'s eyes are unfamiliar. The woman I paint holds herself like someone known, yet something is \
      wrong. A distortion in the lineage. A silence in the gaze.</p>\
      <p>And then, an old photograph, faded at the edges. I search its contours for you. A glint of a nose ring. \
      An arch of your spine, a sari that catches the light. Perhaps this is you. Not the first face. Not the one I painted.</p>\
      I return to the canvas, to the image I no longer believe in. "Who are you?" \
      You were once trusted with my infant body, held long enough to be photographed, but not remembered.</p>\
      <p>I look again. I choose. I repaint.</p>\
      <p>This is not re-storation, it is re-creation. An undoing of mis-recognition. A second beginning. I paint the woman whose \
      eyes hold warmth, whose silence hums with a forgotten song. The brush paints where history fails.</p>\
      <p>As the painting nears completion, I begin to hear you, maybe not your voice, but something close. A vibration, a tune \
      carried across time and space.</p>\
      <p>Achiamma, are you there?</p>'
  },

  {
      type: "video",
      embed: true,
      //src: "https://d2hpwsdp0ihr0w.cloudfront.net/sessions/15bba83b-1f61-402a-91f8-b2fd00f2ca72/514b5327-0509-48b3-a163-b2fd00f2ca77-f4b463e2-7362-4065-98ac-b2fe01079dc2.mp4",
      src: "https://customer-aygqk36gwfkjjx2a.cloudflarestream.com/13342e8c2f27c97f3c1d6299336c1d1d/iframe",
      caption: "Achiamma Film Scene 3 - Memories. Embodied.",
      description: '<p>The third scene of Achiamma lingers in stillness. My face is blurred to soften the distance \
      between us. I stand before the canvas, tracing your contours, not with paint this time, but with my \
      fingers, my hands, my body. A silent attempt to make contact.</p>\
      <p>The painting has dried, but the bond has not.</p>\
      <p>Six weeks passed before the surface set, before I dared to touch what I had made. And now, I notice. I see you. \
      Not from memory, but from knowing. It\'s a kind of knowing that emerges from within me.</p>\
      <p>There is a gentleness in your gaze that I did not intend, but need. I need you to be gentle while I \
      heal the roots that ache beneath my skin. The wounds I inherited. The pain I can\'t name.</p>\
      <p>I invite you in, not as ancestor, not as myth, but as presence. As a companion in the space where memory fails, but \
      love still asks to be held.</p>\
      <p>Somewhere, just beyond the painting, your voice begins to sing.</p>\
      <p>And then, it fades.</p>'
  },

  {
      type: "video",
      embed: true,
      //src: "https://d2hpwsdp0ihr0w.cloudfront.net/sessions/7a66d3ad-2769-4fa2-8ffb-b2fd00f4601d/8ca0a806-4112-443f-81af-b2fd00f46024-6ae5ef49-d346-4fdb-8fd1-b2fe0104cf9e.mp4",
      src: "https://customer-aygqk36gwfkjjx2a.cloudflarestream.com/15b1765b90d4b71910a17ac416bc90ae/iframe",
      caption: "Achiamma Film Scene 5 (by Alan and Leah Muriel Bowie)",
      description: '<p>The fifth scene of Achiamma is a crossing of timelines, a layered choreography of inheritance and loss,\
      projected across decades. My grandfather\’s film footage, shot between 1930 and 1960 shows animals moving through the lens of the empire: \
      beagles panting at the edge of the frame, a leopard pacing through a garden, the landscape lush and watchful. \
      Sometimes, people appear. Sometimes, they disappear before they are seen.</p>\
      Over this colonial gaze, I place myself as shadowed figures behind a screen. Variations of me. Bodies tracing lines, moving in \
      response. Many selves, flickering in and out of shape. A past performance, drawn from \
      my personal archive, becomes a form of presence I could not offer live because my hearing would not let me. Because music has become painful to my ears.</p>\
      <p>The screen is a palimpsest. Archive and performance, empire and echo, intention and interference. My body interrupts \
      the image, not to reclaim it, but to add to it.</p>\
      <p>The soundtrack carries Achiamma\’s voice, layered with drum rhythms, berimbau and violin. A composition shaped by Carnatic \
      memory, but fractured through distance and diasporic noise. This is not accompaniment. It is counterpoint. A polyphony of \
      fragments searching for relation.</p>\
      <p>This was meant to be the main scene of the film.</p>\
      <p>It still is.</p>\
      <p>Even in absence, I appear. I interfere. I trace.</p>'
  },

  {
      type: "video",
      embed: true,
      //src: "https://d2hpwsdp0ihr0w.cloudfront.net/sessions/ca4c088a-f060-4303-8088-b284013e3cf7/c1d16c25-e111-4363-94b9-b284013e3d03-cd0b4398-3b66-4ec4-877b-b2e40126735d.mp4",
      src: "https://customer-aygqk36gwfkjjx2a.cloudflarestream.com/3c0baf3a7ce66a9c025fb51a711998a7/iframe",
      caption: "Connect, connect, connect",
      description: '<p>This is a meditation on connection across time, memory, and lineage. In this fragment, \
      strands of hair grow from my head towards Achiamma. Delicate yet persistent threads that bind us. \
      The animation is overlaid with a poem exploring intergenerational bonds, and accompanied by a song in homage to \
      Meredith Monk, whose work weaves together voice, presence, and continuity. Together, image, word, and sound form \
      a ritual, one that honours the intimacy between past and present, and gestures toward a shared future.</p>'
  },

  {
      type: "video",
      embed: true,
      hotspot: true,
      //src: "https://d2hpwsdp0ihr0w.cloudfront.net/sessions/9e6711dd-80ab-4781-a505-b27e01520874/e46afa96-101d-44ce-b8c7-b27e01520880-c8646bda-c0ad-4a2b-8d19-b2e4010dce3d.mp4",
      src: "https://customer-aygqk36gwfkjjx2a.cloudflarestream.com/b078cf7695d00b8a9882094802973c87/iframe",
      caption: "Lineage",
      description: '<p>My lineage is filled<br/>\
        with inner landscapes.</p>\
        <p>People\'s faces<br/>\
        mirrored in rivers and lakes.<br/>\
        Their voices<br/>\
        echoing through valleys.<br/>\
        Mountains so high,<br/>\
        they sometimes block the sun.</p>\
        <p>My lineage is what shapes me,<br/>\
        what connects past | present | future,<br/>\
        what grounds me in this moment.</p>\
        <p>I can be who I am today<br/>\
        because many others were<br/>\
        who they were in the past.</p>\
        <p>I am not alone.<br/>\
        We are all together,<br/>\
        right now,<br/>\
        in this moment.</p>\
        <p><i>These wind chimes hold the names of people, places, and moments that have shaped me. Motion ripples through the chimes,\
        creating a dynamic web of re-calibration. Lineage is not static, but a living, breathing network of relation.</i></p>'
          },
  {
      type: "video",
      embed: true,
      //src: "https://d2hpwsdp0ihr0w.cloudfront.net/sessions/b4d1324f-59e4-4def-b93d-b1ad00e01416/a6201a47-acab-4145-b502-b1ad00e01421-99f4f54b-dd9d-4bda-b009-b2e40111f1c6.mp4",
      src: "https://customer-aygqk36gwfkjjx2a.cloudflarestream.com/0e1696bec492b79e2ffcc6931f313af8/iframe",
      caption: "Lines: A Performance",
      description: '<p>\
      My shadow becomes a witness.<br/>\
      As I draw lines, slow, uncertain.<br/>\
      A choreography of marks,<br/>\
      etched in light and body.</p>\
      <p>Each line is a thread, <br/>\
      a question,<br/>\
      a reaching gesture.</p>\
      <p>Lines stretch across the screen like veins,<br/>\
      mapping a terrain between past, present, and future<br/>\
      between my body and hers. <br/>\
      Achiamma.</p>\
      <p>She is not here,<br/>\
      but her absence shapes the space.<br/>\
      She is in the gestures,<br/>\
      in the memory of objects once held,<br/>\
      in the weight of stories untold.</p>\
      <p>My hands keep returning to the lines, <br/>\
      not to change them, but to follow,<br/>\
      to trace what has already been drawn.</p>\
      <p>Touch becomes a language.<br/>\
      As I lean into the marks,<br/>\
      I let them move me,<br/>\
      offer me shapes I didn’t know I knew.</p>\
      <p>This is a search<br/>\
      for connection,<br/>\
      for lineage,<br/>\
      for the invisible threads that tie us to those <br/>\
      we come from <br/>\
      and to the selves we are becoming.</p>\
      <p>Lines is a quiet invocation. <br/>\
      A ritual of tracing and being traced. <br/>\
      A shadow-play of memory, <br/>\
      a body trying to remember.</p>'
  },

  /*{
      type: "video",
      src: "https://d2hpwsdp0ihr0w.cloudfront.net/sessions/58eb429f-78e7-42e1-8e04-b1fb012e5901/07761950-6cb6-415f-b3ae-b1fb012e590a-b4f22db0-37ca-45aa-9b26-b2e40127829a.mp4",
      caption: "Questions",
      description: '<p> In this video portrait, I sit and listen as a series of questions unfold, spoken aloud \
        in German, English, and French. These questions echo in the space between language and silence, drifting \
        through the air and into the body. </p> \
        <p> They are existential, intimate, and political.</p> \
        <p>They ask:</p>\
        <p>What does it mean to be human in this world?</p>\
        <p>Who am I doing this for?</p>\
        <p>Where do I go when I am sad?</p>\
        <p>Why does the birthplace of my parents matter?</p>\
        <p>As I listen, my expression shifts, sometimes subtly, or not. The camera captures these responses: \
        the flickers of emotion, the pauses, the discomfort, the curiosity.</p>\
        <p>Each question invites not an answer, but a moment of reflection.</p>\
        <p>The voice of my Sri Lankan grandmother, whom I never met, hovers invisibly behind these questions. Her \
        absence is part of this exploration, a presence that shapes how I move through identity, memory, and belonging.</p>\
        <p>This video invites you to listen.</p>\
        <p>To notice which questions speak to you, which ones provoke, and which ones remain unanswered.</p>\
        <p>It is an offering, not of clarity, but of connection.</p>'
  },*/
  {
      type: "audio",
      //src: "https://oca-wp-journals.s3.eu-west-2.amazonaws.com/wp-content/uploads/sites/6017/2025/02/Achiamma_P1.mp3",
      src: "https://lmbowie.net/Achiamma_P1.mp3",
      caption: "Achiamma Theme Song",
      description: '<p>This piece began as a question, a quiet reaching across time toward Achiamma. \
        I never knew what music she truly loved, but I imagined her sitting still, listening to the soft curl of Tamil \
        melodies, the rhythm of drums echoing through narrow streets, the voices rising and falling like breath. \
        Her oil portrait sits across from where I compose, and in her expression, I sometimes imagine a trace of curiosity, \
        perhaps even kindness. I like to think she wouldn\’t mind, though that, of course, is a story I tell myself.</p>\
        <p> I set out to write a piece in the spirit of Tamil music, even though it was never part of the sounds I grew up with. \
        My father filled our home with Sinhala songs, and Tamil traditions lived on the periphery of my experience, distant \
        but resonant.</p> <p>So, I listened. I listened to voices speaking to each other in melody, \
        telling stories with longing and fire. I listened to drums that didn\’t just keep time but carved space, created form. \
        I listened to the air between the notes and the drone beneath it all, a thread tying sound to silence.</p>\
        <p>Carnatic music revealed itself slowly, with its combination of <i>sruti</i> (tonal centre), <i>svara</i> (melodic motion), <i>raaga</i> \
        (melodic framework), and <i>tala</i> (rhythmic structure). These weren\’t just technical elements; they were scaffolding for emotion. Even within their structure, \
        there was space, generous space, for improvisation, for breath, for the unexpected.</p>\
        <p>I borrowed gently. I do not claim to re-create, only to re-flect. I used a violin for swift, bright flourishes, echoes \
        of its role in South Indian performance, where it sometimes replaces the voice itself. I sang into the microphone, \
        layering tremolo into my voice in an attempt to mirror the textured human sound I had come to admire. For the drone, \
        I turned to the berimbau, an instrument with roots far from India, but whose bowed tone offered something elemental, \
        something close. The rhythms were woven digitally, guided by the pulse of the music I had studied.</p>\
        <p>This composition is part memory, part invention. It is an offering, not of authenticity, but of attention. A way \
        of listening for someone I miss, in a language I am still learning to understand. </p>'
  },
  {
      type: "audio",
      //src: "https://oca-wp-journals.s3.eu-west-2.amazonaws.com/wp-content/uploads/sites/7050/2025/05/Indian_Singing.mp3",
      src: "https://lmbowie.net/Indian_Singing.mp3",
      caption: "Achiamma's Voice",
      description: '<p>I try to imagine Achiamma\’s voice, not how she spoke, but how she might \
      have sung when no one was listening. Raw, unadorned, rising from the body like a memory that refuses to fade. I have \
      never heard her sing, yet something in my own voice feels shaped by hers, as if timbre can be passed down like \
      DNA vibrations.</p>\
      <p>By reshaping my voice, I attempt to invoke, to let her presence echo through mine. \
      It is not a perfect re-construction, but a felt one. The breath, the tremble, the imperfection: these are the places \
      where our connection comes to life.</p>\
      <p>This is my way of singing with her across time. Of hearing what was never recorded, but continues to live inside me.</p>'
  },
  {
      type: "audio",
      //src: "  https://oca-wp-journals.s3.eu-west-2.amazonaws.com/wp-content/uploads/sites/7050/2025/05/Achiamma_Two_Strings_Wrapped_Sound.mp3",
      src: "https://lmbowie.net/Achiamma_Two_Strings_Wrapped_Sound.mp3",
      caption: "Two Strings Wrapped",
      description: '<p>Two Strings Wrapped is an instrument I built in an attempt to touch the sound-world of South India in an act \
      of listening through making. I was drawn to the textures of traditional string instruments from the region: the way they \
      sing, hum, and sometimes whisper. Their resonance feels ancient, full of dust, of sunlight, of breath. </p>\
      <p>This instrument began as a gesture, a reaching towards sounds. I wrapped two strings across nails and wood, \
      tuning not only for pitch but for tension, fragility, and the space between tones. It\’s a simple construction, \
      but the sounds it produces carry weight. Grainy, uneven, imperfect, qualities I find most alive in the \
      instruments that inspire me.</p>\
      <p>What emerged wasn\’t a replica, but a translation. Something born from memory, imagination, and desire. A \
      conversation between past and present, tradition and invention.</p>\
      <p>When I play it, I feel closer to something I can\’t name, perhaps a place, perhaps a person. Perhaps just a sound\
      that was waiting to be found.</p>'
  },
  {
      type: "audio",
      //src: "https://oca-wp-journals.s3.eu-west-2.amazonaws.com/wp-content/uploads/sites/7050/2025/05/What-I-dont-know.mp3",
      src: "https://lmbowie.net/What-I-dont-know.mp3",
      caption: "What I don't know",
      description: '<br/><p>I don\'t know your name.</p>\
      <p>I don\'t know the name of the place where you were born.</p>\
      <p>I don\'t know how you spent your days.</p>\
      <p>I don\'t know what your favourite colour was.</p>\
      <p>I don\'t know how you liked your tea.</p>\
      <p>I don\'t know what it meant to be you.</p>'
  },
  {
      type: "audio",
      //src: "https://oca-wp-journals.s3.eu-west-2.amazonaws.com/wp-content/uploads/sites/7050/2025/05/Meh-Gassee_two-voices.mp3",
      src : "https://lmbowie.net/Meh-Gassee_two-voices.mp3",  
      caption: "මේ ගස් බොහො",
      description: '<p>මේ ගස් බොහො, මල් පිපි තිබේ, පටේ පටේ මල්, හැරිම ලස්සනයි</p>\
      <p>This is a piano composition based on a Sinhala song my father sang to me when I was little. I wonder if you knew it too, \
      if, perhaps, when I was in Sri Lanka, barely a breath old, you hummed it softly to lull me to sleep. \
      I wrote the score from memory, let it unfold through improvisation, and wove in a second voice.\
      I don’t know if I got it right, I only know that it felt like a way to find you.</p>'
  },
  {
      type: "text",
      caption: "Here, a fragment was meant to be. It remains in memory only.",
      description: ""
  },

  {
      type: "image",
      //src: "https://oca-wp-journals.s3.eu-west-2.amazonaws.com/wp-content/uploads/sites/7050/2025/06/20250504_1406312.jpg",
      src: "https://imagedelivery.net/IQZYF0rfxQS1PTCeW-A-Gg/1882ca43-4fc0-4f9d-6e97-beea0afb4500/public",
      caption: "A Note About Malaiyaha Tamils",
      description: '<p>In Sri Lanka, approximately 4.2% of the population consists of Malaiyaha Tamils, sometimes referred to as \
        <i>Up-Country Tamils</i>. This ethnic group was brought to Sri Lanka by the British between the 19th and early 20th centuries \
        to work first on coffee and later tea plantations. Most originated from lower castes in Tamil Nadu, South India.</p>\
        <p>The British relied on Malaiyaha Tamil labour for their estates, as the Sinhalese population largely refused to work \
        under colonial conditions. Malaiyaha Tamils were employed in exploitative circumstances, receiving minimal wages and harsh treatment. \
        Despite their long history in Sri Lanka, they were denied citizenship and legal documentation until as late as 2003 or 2005 \
        (sources vary on the exact date). While some returned to India after Sri Lanka gained independence in 1948, many remained and \
        continued to work on tea plantations. Malaiyaha Tamils are among the most marginalised communities in the country.</p>\
        <p>The majority of tea pickers are women, who typically begin working between the ages of 12 and 14. Wages remain extremely low, \
        averaging around €2 per day. Working conditions are harsh, as plantations are located in cold, humid mountain regions with \
        frequent rainfall. Housing is poor, and there is no heating infrastructure despite the challenging climate. Moreover, income is \
        limited by the seasonal availability of mature tea leaves, making it difficult to earn more through additional labour.</p>\
        <p>This community has the highest poverty rate in Sri Lanka, with many families struggling to meet basic nutritional needs. \
        Most live in <i>line rooms</i>: long, barrack-style buildings where entire families share a single room. Literacy rates are \
        significantly below the national average, which is otherwise high. A shortage of qualified teachers in local schools contributes \
        to this gap, and many children - particularly girls - drop out early to join the labour force.</p>\
        <p>Social challenges include widespread alcoholism, especially among men, and high rates of domestic and sexual violence, \
        with children and women disproportionately affected. Despite decades of struggle and visibility efforts, the living and working conditions \
        of this community remain largely unchanged.</p>'
  },

  {
  type: "video",
  //hotspot: true,
  embed: true,
  //src: "https://d2hpwsdp0ihr0w.cloudfront.net/sessions/2dfe2a8b-72a6-4bc9-b10d-b3200106663b/3337f491-70e0-4e90-9753-b32001066643-cbbcc202-3199-423d-a4a3-b320010703a3.mp4",
  src: "https://customer-aygqk36gwfkjjx2a.cloudflarestream.com/75afb675fa22a5bc349c01a30da5faf1/iframe",
  caption: "Window Hill Country",
  description: "<p>These images were taken from my bedroom window in Switzerland while I was sick with a middle ear infection. My hearing was \
  distorted, my balance fragile. I could not walk far, so I began to layer what I could see: mountains, clouds, forests, shaping them into an \
  imagined landscape. Slowly, the view began to resemble the hill country of Sri Lanka, where Achiamma once lived.</p>\
  <p>This is not a literal reconstruction, but a felt one. Through the act of layering, I created a terrain that my body could \
  only reach through imagination. Each frame becomes part echo, part invention. The mist is real. So is the longing. The result is a \
  personal topography of illness, diaspora, and reverence, anchored in stillness, altered by inner movement.</p>"
  },

  {
  type: "text",
  caption: "Home",
  description: '<p>Daheim<br/>\
    Zuhause<br/>\
    La maison<br/>\
    ගෙදර<br/>\
    บ้าน</p>\
    <p>வீடு</p>\
    <p>Das Wort in meinem Mund,<br/>\
    es schmeckt nach nichts,<br/>\
    eine leere Hülle.<br/>\
    Ohne Inhalt.</p>\
    <p>Sometimes I have no concept<br/>\
    of home.<br/>\
    But I know what home is<br/>\
    supposed to be.</p>\
    <p>Safe.<br/>\
    Secure.<br/>\
    Comforting.</p>\
    <p>Daheim ist, wo ich sein darf, wie ich bin.<br/>\
    Ohne Maske.<br/>\
    Verletzlich.<br/>\
    Ich.</p>\
    <p>Daheim ist, wo ich Fehler machen kann,<br/>\
    ohne Angst zu versagen.</p>\
    <p>Daheim ist, wo ich die Pyjamaprinzessin bin.</p>\
    <p>Daheim ist, wo ich mich geborgen fühle.</p>\
    <p>Home is not a place, <br/>\
    it’s a feeling.</p>\
    <p>A feeling I long for<br/>\
    and doubt it exists.</p>\
    <p>Sometimes home feels incredibly close,<br/>\
    sometimes far away like a distant relative.<br/>\
    And sometimes I think:</p>\
    <p><i>Home is just a cheesy TV advert.</i></p><br/>\
    <p>Living in a place and feeling like I don\’t belong<br/>\
    tastes of</p>\
    <p>Loneliness.<br/>\
    Sadness.<br/>\
    Grief.</p>\
    <p>And where loneliness prevails,<br/>\
    a hand reaching out<br/>\
    can feel like</p>\
    <p>Home.</p>'
    }


];



document.addEventListener('DOMContentLoaded', () => {
  //const backgroundAudio = document.getElementById('background-audio');
  let currentMedia = null; // store reference to the current media element
  //let isBackgroundPlaying = false;
  const mapContainer = document.getElementById('map-container');
  const lightbox = document.getElementById('custom-lightbox');
  const mediaContainer = document.getElementById('lightbox-media');
  const captionContainer = document.getElementById('lightbox-caption');
  const descriptionContainer = document.getElementById('lightbox-description');

  if (!mapContainer) {
    console.error('Map container not found!');
    return;
  }

  media.forEach((item, i) => {
    const link = document.createElement('div');
    link.className = 'hotspot';
    link.style.top = `${10 + Math.random() * 70}%`;
    link.style.left = `${10 + Math.random() * 70}%`;
    link.style.animationDelay = `${i * 0.1}s`;
    link.setAttribute('aria-label', item.caption);

    if (item.type === 'text') {
      link.classList.add('hotspot-text');
    }
    if (item.type === 'image') {
      link.classList.add('hotspot-image');
    }
    if (item.type === 'video') {
      link.classList.add('hotspot-video');
    }
    if (item.type === 'audio') {
      link.classList.add('hotspot-audio');
    }
    if (item.type === 'gallery') {
      link.classList.add('hotspot-image');
    }

    if (item.hotspot){
      link.classList.add('hotspot-red');
    }




    link.addEventListener('click', () => {
      mediaContainer.innerHTML = ''; // clear previous

      let mediaElement;

      if (item.type === 'image') {
        mediaElement = document.createElement('img');
        mediaElement.src = item.src;
        mediaElement.alt = item.caption;
        mediaElement.style.maxWidth = '100%';
      }
      else if (item.type === 'gallery') {
        mediaElement = document.createElement('div');
        mediaElement.className = 'gallery-container';

        item.galleryImages.forEach((imgSrc) => {
          const img = document.createElement('img');
          img.src = imgSrc;
          img.alt = item.caption;
          img.style.maxWidth = '100%';
          img.style.marginBottom = '10px';
          mediaElement.appendChild(img);
        });
      } else if (item.type === 'text') {
        mediaElement = document.createElement('text');
        mediaElement.style.width = '100%';

      } else if (item.type === 'video') {

        if (item.embed) {
          mediaElement = document.createElement('iframe');
          //mediaElement.classList.add('responsive-video');
          mediaElement.src = item.src;
          mediaElement.style.width = '100%';
          mediaElement.height = "300";
          mediaElement.frameBorder = "0";
          mediaElement.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
          mediaElement.allowFullscreen = true;
        } else{
          mediaElement = document.createElement('video');
          mediaElement.src = item.src;
          mediaElement.controls = true;
          mediaElement.style.width = '100%';
          mediaElement.style.maxHeight = '70vh';
          mediaElement.style.objectFit = 'contain';
        }

      } else if (item.type === 'audio') {
        mediaElement = document.createElement('audio');
        mediaElement.controls = true;
        mediaElement.style.width = '100%';
        const source = document.createElement('source');
        source.src = item.src;
        source.type = 'audio/mpeg';
        mediaElement.appendChild(source);
      }

      mediaContainer.appendChild(mediaElement);


      captionContainer.textContent = item.caption;
      // Inside link.addEventListener('click', ...)
      descriptionContainer.innerHTML = item.description || '';
      lightbox.style.display = 'flex';
    });

    mapContainer.appendChild(link);
  });

  function repositionHotspots() {
    const hotspots = document.querySelectorAll('.hotspot');
    hotspots.forEach((hotspot, index) => {
      // Reset animation
      hotspot.style.animation = 'none';

      // Force reflow
      void hotspot.offsetWidth;

      // Re-apply animation
      hotspot.style.animation = `slideIn 0.6s ease-out forwards`;
      hotspot.style.animationDelay = `${index * 0.1}s`;
    });
  }

  // Close lightbox on "×" or outside click
  document.querySelector('#custom-lightbox .close').addEventListener('click', (e) => {
    e.preventDefault();
    lightbox.style.display = 'none';
    mediaContainer.innerHTML = '';
    captionContainer.textContent = '';
    descriptionContainer.innerHTML = '';
    repositionHotspots();

  });


});
