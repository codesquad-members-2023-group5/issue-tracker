package team05.codesquad.issuetracker.controller.labeldto.response;

import lombok.*;
import team05.codesquad.issuetracker.domain.label.Label;

import java.util.List;
import java.util.stream.Collectors;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
@ToString
public class LabelResponse {

    private Long id;
    private String title;
    private String description;
    private String backgroundColor;
    private String fontColor;

    public static LabelResponse from(Label label){
        return new LabelResponse(label.getId(), label.getTitle(), label.getDescription(), label.getBackgroundColor(), label.getFontColor());
    }

    public static List<LabelResponse> from(List<Label> labels) {
        return labels.stream().map(LabelResponse::from).collect(Collectors.toUnmodifiableList()); // 리스트 add,update,delete 안됨. 읽기 전용
    }

}
