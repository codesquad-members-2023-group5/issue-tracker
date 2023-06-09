package team05.codesquad.issuetracker.service;

import com.amazonaws.services.kms.model.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team05.codesquad.issuetracker.controller.labeldto.request.LabelRequest;
import team05.codesquad.issuetracker.controller.labeldto.response.LabelResponse;
import team05.codesquad.issuetracker.controller.labeldto.response.LabelsResponse;
import team05.codesquad.issuetracker.domain.label.Label;
import team05.codesquad.issuetracker.repository.LabelRepository;


@Service
@Transactional
@RequiredArgsConstructor
public class LabelService {

    private final LabelRepository labelRepository;

    public LabelResponse save(LabelRequest request) {
        Label label = request.toEntity();
        return LabelResponse.from(labelRepository.save(label));
    }

    public LabelsResponse findAll() {
        return LabelsResponse.from(labelRepository.findAll());
    }


    // 업데이트하고, 업데이트 한 값을 반환해주는 역할 -> editLabel
    public LabelResponse edit(Long id, LabelRequest request) {
        Label targetLabel = labelRepository.findById(id).orElseThrow(() -> new NotFoundException(HttpStatus.NOT_FOUND + "정보를 찾을 수 없습니다"));
        targetLabel.editLabel(request.getTitle(), request.getDescription(), request.getBackgroundColor(), request.getFontColor());
        labelRepository.update(targetLabel.getId(), targetLabel.getTitle(), targetLabel.getDescription(), targetLabel.getBackgroundColor(), targetLabel.getFontColor());
        return LabelResponse.from(targetLabel);
    }


    public void delete(Long id) {
        labelRepository.findById(id).orElseThrow(() -> new NotFoundException(HttpStatus.NOT_FOUND + "정보를 찾을 수 없습니다"));
        labelRepository.deleteById(id);
    }
}
