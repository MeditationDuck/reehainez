
const profileData = {
  title: "MeditationDuck",
  subtitle: "君に見える世界と、僕の世界と...",
  dob: "生年月日: 1990年6月15日",
  birthplace: "出身地: 東京, 日本",
  genre: "ジャンル: エレクトロニック、アンビエント、ワールドミュージック",
  debutYear: "デビュー年: 2012年",
  biography: `
MeditationDuckは、音楽をメディテーションやリラクゼーションの手段として捉える、日本出身のユニークなアーティストです。彼の音楽は、都市の喧騒から自然の静寂まで、多岐にわたる音の風景を持っています。彼のトラックは、瞑想セッション、ヨガ、または単にリラックスする時間を求めるリスナーにとって、理想的な背景音楽となっています。
MeditationDuckは、幼少期より音楽に触れ、多くの楽器を学びました。彼の音楽の中には、日本の伝統的な楽器やリズムが織り込まれており、西洋と東洋の融合を感じることができます。
デビューアルバム「Silent Ponds」は、2012年にリリースされ、即座に多くのファンからの注目を浴びました。その後も彼は、世界各地でのライブパフォーマンスやワークショップを通じて、その才能を広めています。`
};


const About = () => {
  return (
    <div className=" text-white w-screen min-h-screen flex flex-col justify-center items-center p-10 space-y-6">
      {/* <Header title="about"/> */}
      <p className="text-2xl uppercase tracking-wide">Profile</p>
      <h1 className="text-4xl font-bold">{profileData.title}</h1>
      <h2 className="text-3xl text-red-600">{profileData.subtitle}</h2>
      <div className="text-xl space-y-4">
        <p>{profileData.dob}</p>
        <p>{profileData.birthplace}</p>
        <p>{profileData.genre}</p>
        <p>{profileData.debutYear}</p>
        <p className="leading-relaxed">{profileData.biography}</p>
      </div>
    </div>
  );
};

export default About;
