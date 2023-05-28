//
//  ViewController.swift
//  issue-tracker
//
//  Created by PJB on 2023/05/10.
//

import UIKit

final class IssueViewController: UIViewController {
    private var dataSource: UICollectionViewDiffableDataSource<Section, Item>!
    private var currentSnapshot: NSDiffableDataSourceSnapshot<Section, Item>!
    private var issueCardCellRegistration: UICollectionView.CellRegistration<IssueCardCell, Item>!
    private var issueHeaderCellRegistration: UICollectionView.SupplementaryRegistration<IssueListHeaderView>!
    private var itemHttpHandler = HTTPHandler<Item>()
    private var data: [Item] = []
    private let issueListCollectionView: UICollectionView = UICollectionView(frame: .zero, collectionViewLayout: UICollectionViewFlowLayout())
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.issueListCollectionView.delegate = self
        self.configureIssueCollectionView()
        self.layoutIssueListCollectionView()
        configureDataSource()
        setupData()
    }
    
    private func setupData() {
        DispatchQueue.main.async {
            self.itemHttpHandler.fetchIssue { result in
                switch result {
                case.success(let issueData):
                    self.data = issueData
                    self.configureSnapshot()
                default:
                    break
                }
            }
        }
    }
    
    private func configureIssueCollectionView() {
        self.issueListCollectionView.backgroundColor = ColorValue.gray100
        self.issueCardCellRegistration = UICollectionView.CellRegistration<IssueCardCell, Item> { (cell, _, item) in
            cell.titleLabel.text = item.issueTitle
            cell.explanationLabel.text = "설명설명설명설명설명설명설명"
            cell.milestoneLabel.text = item.milestone.milestoneName
            cell.labelStackView.arrangedSubviews.forEach { $0.removeFromSuperview() }
            item.label.forEach { data in
                let custom = CustomCapsuleLabel(name: data.labelName, textColor: data.textColor, backgroundColor: data.backgroundColor, font: FontStyle.label.font)
                cell.labelStackView.addArrangedSubview(custom)
            }
        }
        self.issueHeaderCellRegistration = UICollectionView.SupplementaryRegistration<IssueListHeaderView>(elementKind: UICollectionView.elementKindSectionHeader) { (cell, _, indexPath) in
            let section = self.currentSnapshot.sectionIdentifiers[indexPath.section]
            cell.title.text = section.title
        }
    }
    
    private func layoutIssueListCollectionView() {
        issueListCollectionView.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(issueListCollectionView)
        
        NSLayoutConstraint.activate([
            issueListCollectionView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            issueListCollectionView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            issueListCollectionView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            issueListCollectionView.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor)
        ])
    }
}

extension IssueViewController: UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, referenceSizeForHeaderInSection section: Int) -> CGSize {
        let width = view.frame.width
        let height: CGFloat = 48
        return CGSize(width: width, height: height)
    }
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        let width = view.frame.width
        let height: CGFloat = 148
        return CGSize(width: width, height: height)
    }
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, minimumLineSpacingForSectionAt section: Int) -> CGFloat {
        return 1.0
    }
}

extension IssueViewController {
    private func configureDataSource() {
        self.dataSource = UICollectionViewDiffableDataSource<Section, Item>(collectionView: self.issueListCollectionView, cellProvider: { (collectionView, indexPath, itemIdentifier) -> UICollectionViewCell? in
            return collectionView.dequeueConfiguredReusableCell(using: self.issueCardCellRegistration, for: indexPath, item: itemIdentifier)
        })
        
        self.dataSource.supplementaryViewProvider = { (collectionView, _, indexPath) in
            return collectionView.dequeueConfiguredReusableSupplementary(using: self.issueHeaderCellRegistration, for: indexPath)
        }
    }
    
    private func configureSnapshot() {
        self.currentSnapshot = NSDiffableDataSourceSnapshot<Section, Item>()
        self.currentSnapshot.appendSections([.issue])
        self.currentSnapshot.appendItems(self.data, toSection: .issue)
        self.dataSource.apply(self.currentSnapshot)
    }
}
