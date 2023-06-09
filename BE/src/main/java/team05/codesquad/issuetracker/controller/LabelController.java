package team05.codesquad.issuetracker.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import team05.codesquad.issuetracker.controller.labeldto.request.LabelRequest;
import team05.codesquad.issuetracker.controller.labeldto.response.LabelResponse;
import team05.codesquad.issuetracker.controller.labeldto.response.LabelsResponse;
import team05.codesquad.issuetracker.service.LabelService;


@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/labels")
public class LabelController {

    private final LabelService labelService;


    // 전체 목록 조회
    @GetMapping
    public ResponseEntity<LabelsResponse> getLabels() {
        return ResponseEntity.ok().body(labelService.findAll());
    }


    // 레이블 생성하기
    @PostMapping
    public ResponseEntity<LabelResponse> createLabel(@RequestBody LabelRequest request) {
        LabelResponse response = labelService.save(request);
        return ResponseEntity.ok().body(response);
    }

    // 레이블 수정하기
    @PutMapping("/{id}") // put -> 전체, patch -> 일부교체. 근데 전체를 받고있는데 일부를 교체한다고 볼 수 있나? 이건 put이 맞다. 어차피 id는 변경이 안된다
    public ResponseEntity<LabelResponse> editLabel(@PathVariable Long id, @RequestBody LabelRequest request) {
        LabelResponse response = labelService.edit(id, request);
        return ResponseEntity.ok().body(response);
    }

    // 레이블 삭제하기
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLabel(@PathVariable Long id) {
        labelService.delete(id);
        return ResponseEntity.ok().build(); // 삭제를 빌더패턴으로 생성
    }

}
