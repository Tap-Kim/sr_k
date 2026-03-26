/**
 * sr_k/simple (심플 이력서) payload 모음
 *
 * 기본 이력서(sr_k)에서 other-experience 섹션을 제외한 버전입니다.
 * work-experience는 핵심 성과 위주로 축약된 별도 파일을 사용합니다.
 * simple/page.tsx 에서 이 파일만 import하면 됩니다.
 */

export { default as metaPayload } from "../../meta";
export { default as profilePayload } from "../../profile";
export { default as introducePayload } from "./introduce"; // simple 전용
export { default as skillPayload } from "../../skill";
export { default as workExperiencePayload } from "./work-experience"; // simple 전용
export { default as educationPayload } from "../../education";
export { default as etcPayload } from "../../etc";
