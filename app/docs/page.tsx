export default function DocsPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">도움말 📚</h1>
      <div className="prose prose-gray max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">시작하기</h2>
          <p className="text-muted-foreground mb-4">
            코딩유치원에 오신 것을 환영합니다! 여기서는 프로그래밍과 AI를 쉽고 재미있게 배울 수 있습니다.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">1. 회원가입</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>오른쪽 상단의 &quot;로그인&quot; 버튼을 클릭하세요</li>
            <li>이메일 또는 소셜 계정으로 가입할 수 있습니다</li>
            <li>프로필 설정을 완료하면 모든 기능을 사용할 수 있습니다</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">2. 학습 시작하기</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>&quot;코딩교실&quot;에서 다양한 학습 자료를 찾아보세요</li>
            <li>&quot;장난감상자&quot;에서 주제별로 정리된 콘텐츠를 확인하세요</li>
            <li>댓글과 좋아요로 다른 학습자들과 소통하세요</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">자주 묻는 질문</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Q: 모든 콘텐츠가 무료인가요?</h3>
              <p className="text-muted-foreground">
                네, 현재 모든 콘텐츠는 무료로 제공됩니다. 양질의 교육 콘텐츠를 누구나 접근할 수 있도록 하는 것이 우리의 미션입니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Q: 초보자도 따라할 수 있나요?</h3>
              <p className="text-muted-foreground">
                물론입니다! 모든 콘텐츠는 초보자도 이해할 수 있도록 쉽게 설명되어 있으며, 단계별로 학습할 수 있도록 구성되어 있습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Q: 질문이나 제안이 있으면 어떻게 하나요?</h3>
              <p className="text-muted-foreground">
                각 글의 댓글 섹션이나 이메일(support@codingnursery.dev)을 통해 언제든 문의해주세요.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">커뮤니티 가이드라인</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>서로를 존중하고 배려하는 태도를 유지해주세요</li>
            <li>건설적인 피드백과 의견을 공유해주세요</li>
            <li>부적절한 콘텐츠나 스팸은 삭제될 수 있습니다</li>
            <li>저작권을 준수해주세요</li>
            <li>다른 학습자들과 적극적으로 교류하고 함께 성장해요</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
