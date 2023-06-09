package team05.codesquad.issuetracker.controller.labeldto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import team05.codesquad.issuetracker.domain.label.Label;

import java.util.List;
import java.util.stream.Collectors;

@NoArgsConstructor
@Getter
@Setter
public class LabelsResponse {
    private List<LabelResponse> labels;
    private int totalCount;


    public LabelsResponse(List<LabelResponse> labels) {
        this.labels = labels;
        this.totalCount = labels.size();
    }

    public static LabelsResponse from(List<Label> labels) {
        return new LabelsResponse(labels.stream()
                .map(LabelResponse::from)
                .collect(Collectors.toList()));
    }
}
