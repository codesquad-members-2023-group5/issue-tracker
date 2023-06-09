package team05.codesquad.issuetracker.controller.labeldto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team05.codesquad.issuetracker.domain.label.Label;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class LabelRequest {
    private String title;
    private String description;
    private String backgroundColor;
    private String fontColor;

    public Label toEntity(){
        return Label.builder()
                .title(title)
                .description(description)
                .backgroundColor(backgroundColor)
                .fontColor(fontColor)
                .build();
    }
}
